.DEFAULT_GOAL := help

.PHONY: help
help:
	@echo "Usage:"
	@echo "  [For Setup]"
	@echo "  - make setup      ... setup kataribe, querydigest, bash, zsh"
	@echo "  [Prepare benchmark]"
	@echo "  - make bench      ... test, logrotate, and restart http-server and database"
	@echo "  - make test       ... run tests"
	@echo "  - make logrotate  ... logrotate"
	@echo "  - make restart    ... restart related services"
	@echo "  [After benchmark]"
	@echo "  - make analyze    ... run qdigest, kataribe, upload"
	@echo "  - make kataru     ... run kataribe with latest access.log"
	@echo "  - make qdigest    ... run querydigest with latest slow.log"
	@echo "  - make ptdigest   ... run pt-query-digest with latest slow.log"
	@echo "  - make upload     ... upload summaries to discord"
	@echo "  [Misc.]"
	@echo "  - make status-web     ... show systemctl status $(SERVICE_WEBAPP1)"
	@echo "  - make status-web-j   ... show journalctl -u $(SERVICE_WEBAPP1) (journal)"
	@echo "  - make status-web-f   ... show journalctl -fu $(SERVICE_WEBAPP1) (follow)"
	@echo "  - make status-api     ... show systemctl status $(SERVICE_WEBAPP2)"
	@echo "  - make status-api-j   ... show journalctl -u $(SERVICE_WEBAPP2) (journal)"
	@echo "  - make status-api-f   ... show journalctl -fu $(SERVICE_WEBAPP2) (follow)"
	@echo "Configuration Variables:"
	@echo "  [Common]"
	@echo "  - SERVICE_XXX     ... a systemd service name requires to restart when benchmark"
	@echo "  - LOG_NGINX       ... /path/to/access.log; used for logrotate"
	@echo "  - LOG_SLOW        ... /path/to/mysql-slow.log; used for logrotate"
	@echo "  [For Docker Environment]"
	@echo "  - IS_DOCKER_XXX   ... a switch for docker environment"
	@echo "  - IS_DOCKER_XXX   ... a switch for docker-compose environment (omitting restart except webapp)"
	@echo "  - DOCKER_XXX      ... docker image name"

NOW := $(shell TZ=UTC-9 date +%s-%H:%M:%S)
LOG_DIR := $(HOME)/logs/$(NOW)


# ------
# CONFIG
# ------
IS_DOCKER_HTTP    := false
IS_DOCKER_DB      := false
IS_DOCKER_WEBAPP  := false
IS_DOCKER_COMPOSE := false

DOCKER_HTTP   := webapp_nginx_1
DOCKER_DB     := webapp_mysql_1
DOCKER_WEBAPP := webapp_webapp_1

SERVICE_HTTP   := envoy
SERVICE_DB     := mysql
SERVICE_WEBAPP1 := xsuportal-web-golang.service
SERVICE_WEBAPP2 := xsuportal-api-golang.service

# for HTTP
ifeq ($(IS_DOCKER_HTTP),true)
	# requires: logging = 'json-file'
	LOG_HTTP := $(shell sudo docker inspect --format='{{.LogPath}}' $(DOCKER_HTTP))
else
	LOG_HTTP := /var/log/envoy/access.log
endif

# for MySQL
#LOG_SLOW  := /var/log/mysql/mysql-slow.log
LOG_SLOW  := /var/lib/mysql/mysql-slow.log

# -----


.PHONY: test test-dbconf test-httpconf
#test: test-dbconf test-httpconf
test: test-dbconf

test-dbconf:
ifeq ($(IS_DOCKER_DB),true)
	sudo docker exec $(DOCKER_DB) mysqld --verbose --help > /dev/null
else
	sudo mysqld --verbose --help > /dev/null
endif

test-httpconf: test-nginxconf

test-nginxconf:
ifeq ($(IS_DOCKER_HTTP),true)
	sudo docker exec $(DOCKER_HTTP) nginx -t
else
	sudo nginx -t
endif

.PHONY: bench
bench: test logrotate restart
bench-yes-i-know-this-option-will-also-dropdb: test dropdb logrotate restart


dropdb:
ifeq ($(IS_DOCKER_DB),true)
	sudo docker-compose -f webapp/docker-compose.yml -f webapp/docker-compose.go.yml down --volume
else
	# TODO
endif

.PHONY: restart
restart:
	sudo systemctl daemon-reload
	sudo systemctl restart $(SERVICE_WEBAPP1)
	sudo systemctl restart $(SERVICE_WEBAPP2)
	sudo systemctl restart $(SERVICE_HTTP)
	sudo systemctl restart $(SERVICE_DB)

.PHONY: status-web status-web-j status-web-f
status-web:
	sudo systemctl status $(SERVICE_WEBAPP1)

status-web-j:
	sudo journalctl -u $(SERVICE_WEBAPP1)

status-web-f:
	sudo journalctl -fu $(SERVICE_WEBAPP1)

.PHONY: status-api status-api-j status-api-f
status-api:
	sudo systemctl status $(SERVICE_WEBAPP2)

status-api-j:
	sudo journalctl -u $(SERVICE_WEBAPP2)

status-api-f:
	sudo journalctl -fu $(SERVICE_WEBAPP2)


.PHONY: analyze lslog kataru qdigest ptdigest upload
#analyze: kataru qdigest upload
analyze: qdigest upload
lslog:
	@find $(HOME)/logs/ -type f -printf "%p\t%s\n" | sort

kataru:
	$(eval LAST_ACCESS_LOG := $(shell find $(HOME)/logs/*/access.log | sort | tail -1))
	$(eval BASEDIR := $(shell dirname $(LAST_ACCESS_LOG)))
	cat $(LAST_ACCESS_LOG) | kataribe > $(BASEDIR)/summary_kataribe.log
	cat $(BASEDIR)/summary_kataribe.log 

qdigest:
	$(eval LAST_SLOW_LOG := $(shell find $(HOME)/logs/*/slow.log | sort | tail -1))
	$(eval BASEDIR := $(shell dirname $(LAST_SLOW_LOG)))
	querydigest -f $(LAST_SLOW_LOG) -n 10 > $(BASEDIR)/summary_slow-qdigest.log
	cat $(BASEDIR)/summary_slow-qdigest.log

ptdigest:
	$(eval LAST_SLOW_LOG := $(shell find $(HOME)/logs/*/slow.log | sort | tail -1))
	$(eval BASEDIR := $(shell dirname $(LAST_SLOW_LOG)))
	pt-query-digest $(LAST_SLOW_LOG) > $(BASEDIR)/summary_slow-ptdigest.log
	cat $(BASEDIR)/summary_slow-ptdigest.log

upload:
	$(eval LAST_ACCESS_LOG := $(shell find $(HOME)/logs/*/access.log | sort | tail -1))
	$(eval BASEDIR := $(shell dirname $(LAST_ACCESS_LOG)))
	ls $(BASEDIR)/summary* | xargs -I% bash -c "cat % | ./discord-post.sh --filename %"
	

.PHONY: logrotate logrotate-before logrotate-nginx logrotate-slow
logrotate: logrotate-before logrotate-nginx logrotate-slow

logrotate-before:
	mkdir -p $(LOG_DIR)

logrotate-nginx:
ifeq ($(IS_DOCKER_HTTP),true)
	sudo docker logs $(DOCKER_HTTP) > $(LOG_DIR)/access.log
else
	sudo cp $(LOG_HTTP) $(LOG_DIR)/access.log
endif
	sudo chmod 644 $(LOG_DIR)/access.log
	sudo chown $(shell whoami) $(LOG_DIR)/access.log
	sudo truncate -s 0 $(LOG_HTTP)

logrotate-slow:
ifeq ($(IS_DOCKER_DB),true)
	sudo docker cp $(DOCKER_DB):$(LOG_SLOW) $(LOG_DIR)/slow.log
	sudo docker exec $(DOCKER_DB) truncate -s 0 $(LOG_SLOW)
else
	sudo cp $(LOG_SLOW) $(LOG_DIR)/slow.log
	sudo truncate -s 0 $(LOG_SLOW)
endif
	sudo chmod 644 $(LOG_DIR)/slow.log
	sudo chown $(shell whoami) $(LOG_DIR)/slow.log

.PHONY: setup setup-dev setup-shell
setup: setup-shell setup-dev

.PHONY: setup-bash setup-zsh
setup-shell: setup-bash setup-zsh

.PHONY: setup-packages setup-querydigest setup-kataribe
setup-dev: setup-packages setup-querydigest setup-kataribe
	git config --global user.name isucon
	git config --global user.email isucon

setup-packages:
	sudo apt-get -y install zip zsh dstat git percona-toolkit

setup-querydigest:
	mkdir -p $(HOME)/_setup
	cd $(HOME)/_setup; \
		wget https://github.com/akito0107/querydigest/releases/download/v1.0.2/querydigest_linux_x86_64.tar.gz -O querydigest.tar.gz; \
		tar xf querydigest.tar.gz; \
		sudo cp querydigest /usr/bin/
	querydigest -h || :

setup-kataribe: setup-packages
	mkdir -p $(HOME)/_setup
	cd $(HOME)/_setup; \
		wget https://github.com/matsuu/kataribe/releases/download/v0.4.1/kataribe-v0.4.1_linux_amd64.zip -O kataribe.zip; \
		unzip -o kataribe.zip; \
		sudo cp kataribe /usr/bin/
	kataribe -generate

setup-bash:
	echo "bind 'set show-all-if-ambiguous on'"          >> $(HOME)/.bashrc
	echo "bind '\"\\\\t\":menu-complete'"               >> $(HOME)/.bashrc
	echo "bind '\"\\\\e\\\\t\":menu-complete-backward'" >> $(HOME)/.bashrc
	echo "bind '\"\\\\e[Z\":menu-complete-backward'"    >> $(HOME)/.bashrc
	echo "bind '\"\\\\C-f\":unix-filename-rubout'"      >> $(HOME)/.bashrc

setup-zsh: setup-packages
	cd ; \
		rm -rf dotfiles || :; \
		git clone https://bitbucket.org/k5342/dotfiles.git; \
		mv .zshrc .zshrc.old || :; \
		ln -s ~/dotfiles/.zshrc .
