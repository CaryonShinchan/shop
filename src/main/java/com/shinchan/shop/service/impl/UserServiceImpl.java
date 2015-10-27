package com.shinchan.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shinchan.shop.dao.UserDao;
import com.shinchan.shop.domain.User;
import com.shinchan.shop.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	/**
	 * 添加用户登录信息
	 */
	@Override
	public void addUser(User user) {
		this.userDao.insertSelective(user);
	}

	/**
	 * 通过id获取用户登录信息
	 */
	@Override
	public User getUserById(int userId) {
		return this.userDao.selectByPrimaryKey(userId);
	}

	/**
	 * 通过邮箱、手机获取登录密码
	 */
	@Override
	public String getUserPassword(User user) {
		return this.userDao.getUserPassword(user);
	}

	/**
	 * 获取全部注册用户
	 */
	@Override
	public User getAllUser() {
		return this.userDao.selectAll();
	}

	/**
	 * 通过id修改用户登录信息
	 */
	@Override
	public void updateUserById(User user) {
		this.userDao.updateByPrimaryKeySelective(user);
	}

	/**
	 * 通过id删除用户登录信息
	 */
	@Override
	public void deleteUserById(int userId) {
		this.userDao.deleteByPrimaryKey(userId);
	}

	/**
	 * 检查是否存在邮箱或手机
	 */
	@Override
	public String checkEmailORPhone(String email, String phone, int code) {
		String msg;
		int count;
		if (0 == code) {
			count = userDao.checkEmail(email);
			if (1 == count) {
				msg = "邮箱：" + email + "已经注册！";
				return msg;
			} else {
				msg = "恭喜！邮箱可以使用";
				return msg;
			}
		} else if (1 == code) {
			count = userDao.checkPhone(phone);
			if (1 == count) {
				msg = "手机号：" + phone + "已经注册！";
				return msg;
			} else {
				msg = "恭喜！手机号可以使用";
				return msg;
			}
		}
		return null;
	}
}