package com.shinchan.shop.service;

import com.shinchan.shop.domain.User;

public interface UserService {

	public void addUser(User user);

	public User getUserById(int userId);
	
	public String getUserPassword(User user);
	
	public User getAllUser();

	public void updateUserById(User user);

	public void deleteUserById(int userId);

	public String checkEmailORPhone(String email, String phone, int code);

}
