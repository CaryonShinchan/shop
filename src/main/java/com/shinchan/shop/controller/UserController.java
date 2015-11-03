package com.shinchan.shop.controller;

import java.io.IOException;
import java.security.InvalidKeyException;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shinchan.shop.domain.User;
import com.shinchan.shop.service.UserService;
import com.shinchan.shop.utils.MD5Util;
import com.shinchan.shop.utils.Tools;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private Tools tools;

	@Autowired
	private MD5Util md5Util;

	/**
	 * 用户注册
	 * @param user
	 * @return
	 * @throws InvalidKeyException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 */
	@RequestMapping("/reg")
	public String register(User user) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
		// 去除第二个密码框带来的","号
		// String pwd = user.getUser_password().replaceAll(",", "");

		// 获取密码,防止点击密码明文图标后,密码出现两次
		String[] pwds = user.getUser_password().split(",");
		String pwd = pwds[1];

		// 使用MD5加密算法加密
		String encontent = md5Util.generatePassword(pwd);

		// 存入实体Bean中
		user.setUser_password(encontent);
		user.setUser_login_ip(tools.getWindowsServerIp());
		user.setUser_reg_date(tools.getCurrentDateTime());

		userService.addUser(user);
		return "success";
	}

	/**
	 * 用户登录信息
	 * @param user
	 * @return
	 * @throws InvalidKeyException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws IOException 
	 */
	@RequestMapping("/login")
	public String login(User user, HttpServletResponse response) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException, IOException {

		// 先根据id获取用户记录
		String pwdStr = userService.getUserPassword(user);

		// System.out.println("数据库：" + pwdStr);
		// System.out.println("输入：" +
		// md5Util.encodeByMD5(user.getUser_password()));
		// System.out.println(md5Util.encodeByMD5(user.getUser_password()).equals(pwdStr));

		if (null != pwdStr) {
			// 验证是否正确
			if (md5Util.validatePassword(pwdStr, user.getUser_password())) {
				return "index";
			}
		}
		response.getWriter().write("账号和密码不匹配，请重新输入！");
		response.getWriter().flush();
		return "/WEB-INF/login";
	}

	/**
	 * 检查邮箱或手机是否存在
	 * @param user
	 * @return
	 * @throws IOException
	 */
	@RequestMapping("/checkName")
	@ResponseBody
	public void checkEmailORPhone(@RequestParam("email") String email, @RequestParam("phone") String phone,
			@RequestParam("code") int code, HttpServletResponse response) throws IOException {
		String epStr;
		epStr = userService.checkEmailORPhone(email, phone, code);
		// epStr = new String(epStr.getBytes(), "UTF-8");
		// String str = java.net.URLDecoder.decode(epStr,"UTF-8");

		// System.out.println(epStr);
		// return epStr;

//		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(epStr);
		response.getWriter().flush();
	}

}