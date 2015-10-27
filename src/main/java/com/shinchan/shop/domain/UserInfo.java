package com.shinchan.shop.domain;

import java.util.Date;

/**
 * 用户详细信息表
 * @author Shinchan
 *
 */
public class UserInfo {

	private Integer user_info_id; // 用户登录id
	private User user; // 登录用户
	private String user_info_nickname; // 用户昵称
	private String user_info_photo; // 用户头像
	private String user_info_gender; // 用户性别
	private Date user_info_birthday; // 生日
	private String user_info_realname; // 真实姓名
	private String user_info_location; // 用户地址

	public Integer getUser_info_id() {
		return user_info_id;
	}

	public void setUser_info_id(Integer user_info_id) {
		this.user_info_id = user_info_id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getUser_info_nickname() {
		return user_info_nickname;
	}

	public void setUser_info_nickname(String user_info_nickname) {
		this.user_info_nickname = user_info_nickname;
	}

	public String getUser_info_photo() {
		return user_info_photo;
	}

	public void setUser_info_photo(String user_info_photo) {
		this.user_info_photo = user_info_photo;
	}

	public String getUser_info_gender() {
		return user_info_gender;
	}

	public void setUser_info_gender(String user_info_gender) {
		this.user_info_gender = user_info_gender;
	}

	public Date getUser_info_birthday() {
		return user_info_birthday;
	}

	public void setUser_info_birthday(Date user_info_birthday) {
		this.user_info_birthday = user_info_birthday;
	}

	public String getUser_info_realname() {
		return user_info_realname;
	}

	public void setUser_info_realname(String user_info_realname) {
		this.user_info_realname = user_info_realname;
	}

	public String getUser_info_location() {
		return user_info_location;
	}

	public void setUser_info_location(String user_info_location) {
		this.user_info_location = user_info_location;
	}

}