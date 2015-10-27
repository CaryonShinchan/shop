package com.shinchan.shop.domain;

public class User {

	private Integer user_id; // 用户登录id
	private String user_email; // 登录邮箱
	private String user_phone; // 登录手机
	private String user_password; // 登录密码
	private String user_reg_date; // 注册时间
	private String user_login_date; // 登录时间
	private String user_login_ip; // 登录ip

	public User() {

	}

	public User(String user_email, String user_phone, String user_password, String user_reg_date, String user_login_date, String user_login_ip) {
		this.user_email = user_email;
		this.user_phone = user_phone;
		this.user_password = user_password;
		this.user_reg_date = user_reg_date;
		this.user_login_date = user_login_date;
		this.user_login_ip = user_login_ip;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_phone() {
		return user_phone;
	}

	public void setUser_phone(String user_phone) {
		this.user_phone = user_phone;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getUser_reg_date() {
		return user_reg_date;
	}

	public void setUser_reg_date(String user_reg_date) {
		this.user_reg_date = user_reg_date;
	}

	public String getUser_login_date() {
		return user_login_date;
	}

	public void setUser_login_date(String user_login_date) {
		this.user_login_date = user_login_date;
	}

	public String getUser_login_ip() {
		return user_login_ip;
	}

	public void setUser_login_ip(String user_login_ip) {
		this.user_login_ip = user_login_ip;
	}

}