
DROP TABLE IF EXISTS `notifications_cursor`;
CREATE TABLE `notifications_cursor` (
  `contestant_id` VARCHAR(255) NOT NULL PRIMARY KEY,
  `newest_id` BIGINT NOT NULL,
  `read_id` BIGINT NOT NULL
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8mb4;
