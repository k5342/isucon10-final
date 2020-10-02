#!/bin/bash


PROGNAME=$(basename $0)

usage() {
	echo "Usage: $PROGNAME [OPTIONS]"
	echo "  -h, --help"
	echo "  -f, --filename filename to post"
	echo "      --configure"
}

configure() {
	echo "Discord Webhook URL:"
	head -1 - > $HOME/.discord-post
}

FILENAME="Attached-File-$(TZ=UTC-9 date +"%H:%M:%S")"
echo $FILENAME

for OPT in "$@"
do
	case $OPT in
		-h | --help)
			usage
			exit 1
		;;
		--configure)
			configure
			exit 0
		;;
		--filename)
			if [[ -z "$2" ]] || [[ $2 =~ ^-+ ]]; then
				shift 1
			else
				FILENAME=$2
				shift 2
			fi
		;;
		*)
			shift 1
		;;
	esac
done

if [[ ! -f "$HOME/.discord-post" ]]; then
	echo "$PROGNAME: please run with --configure first. exit." 1>&2
	exit 1
fi

DISCORD_WEBHOOK_URL=`cat $HOME/.discord-post`
CURL_OPTION="-F file=@-;filename=$FILENAME"


curl -X POST $CURL_OPTION $DISCORD_WEBHOOK_URL

