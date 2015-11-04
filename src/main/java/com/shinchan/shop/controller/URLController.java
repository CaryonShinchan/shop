package com.shinchan.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("url")
public class URLController {

	@RequestMapping("login")
	public String login() {
		return "login";
	}

	@RequestMapping("register")
	public String registrerd() {
		return "registrerd";
	}

}
