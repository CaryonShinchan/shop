/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2015-09-20 21:29:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_user
-- ----------------------------
DROP TABLE IF EXISTS `shop_user`;
CREATE TABLE `shop_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(32) DEFAULT NULL,
  `user_phone` varchar(32) DEFAULT NULL,
  `user_password` varchar(128) NOT NULL,
  `user_reg_date` varchar(20) NOT NULL,
  `user_login_date` varchar(20) DEFAULT NULL,
  `user_login_ip` varchar(15) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户注册登录信息表';

-- ----------------------------
-- Records of shop_user
-- ----------------------------
INSERT INTO `shop_user` VALUES ('1', 'admin', '18910349237', '21232F297A57A5A743894A0E4A801FC3', '2015-09-20 12:33:05', null, '192.168.1.108');
INSERT INTO `shop_user` VALUES ('2', '450349429@qq.com', '18910238745', '202CB962AC59075B964B07152D234B70', '2015-09-20 10:15:25', null, '192.168.1.108');
INSERT INTO `shop_user` VALUES ('3', 'public@163.com', '13672854983', '202CB962AC59075B964B07152D234B70', '2015-09-20 10:16:12', null, '192.168.1.108');
