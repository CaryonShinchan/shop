package com.shinchan.shop;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

public class App {

	public static void main(String args[]) {
		
//		SqlSession session = MBSF.getSqlSession();
//		UserDao userDao = session.getMapper(UserDao.class);
		
		// 根据id查找用户
		// User user = userDao.getUserById(2);
		// System.out.println(user.getName() + "---->" + user.getAge());
		// session.close();

		// 查找全部用户
		// List<User> userList = userDao.getAllUser();
		// for (User user : userList) {
		// System.out.println(user.getName() + "---->" + user.getAge());
		// }
		// session.close();

		// 添加用户
//		 User user = new User("18910376528", "18910473627", "123", new Date(), new Date(), "192.168.1.215");
//		 userDao.insertSelective(user);
//		 session.commit();
//		 session.close();
		
//		 User user = new User("赵建国", 24, "18910376528");
//		 int a = session.insert("com.shinchan.mybatis.dao.UserDao.addUser", user);
//		 session.commit();
//		 session.close();
//		 System.out.println(a);
		

		// 删除用户
		// userDao.deleteUserById(6);
		// session.commit();
		// session.close();
		
//		int del = session.delete("com.shinchan.mybatis.dao.UserDao.deleteUserById", 8);
//		System.out.println(del + "--->");
//		session.commit();
//		session.close();
//		System.out.println(del + "+++>");

		// 修改用户
		// User user = new User(5, "王小发", 18, "18264738965");
		// userDao.updateUserById(user);
		// session.commit();
		// session.close();

		//当前页
//		int currentPage = 3;
//		//每页多少条记录
//		int pageSize = 1;
//		RowBounds rowBounds = new RowBounds((currentPage - 1) * pageSize, pageSize);
//		List<User> list = session.selectList("com.shinchan.mybatis.dao.UserDao.getUserForPage", null, rowBounds);
//		for (User user : list) {
//			System.out.println(list.size());
//			System.out.println();
//		}
//		session.close();
	}
	
}
