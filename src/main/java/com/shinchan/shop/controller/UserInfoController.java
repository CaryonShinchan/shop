package com.shinchan.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.shinchan.shop.service.UserService;

@Controller
@RequestMapping("/userInfo")
public class UserInfoController {

	@Autowired
	private UserService userService;

}
