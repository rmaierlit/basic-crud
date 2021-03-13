/* 
CREATE TABLE IF NOT EXISTS `marqs` (
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
author int(11) NOT NULL,
message varchar(255) NOT NULL,
timestamp timestamp(0) DEFAULT CURRENT_TIMESTAMP,
parent int(11)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
*/