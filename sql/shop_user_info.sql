/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2015-09-19 14:44:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_user_info
-- ----------------------------
DROP TABLE IF EXISTS `shop_user_info`;
CREATE TABLE `shop_user_info` (
  `user_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_info_nickname` varchar(32) NOT NULL,
  `user_info_photo` varchar(256) DEFAULT NULL,
  `user_info_gender` varchar(1) NOT NULL,
  `user_info_birthday` varchar(20) DEFAULT NULL,
  `user_info_realname` varchar(32) NOT NULL,
  `user_info_location` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`user_info_id`),
  KEY `FK_Reference_1` (`user_id`),
  CONSTRAINT `FK_Reference_1` FOREIGN KEY (`user_id`) REFERENCES `shop_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- ----------------------------
-- Records of shop_user_info
-- ----------------------------
