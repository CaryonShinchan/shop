package com.shinchan.shop.dao;

import org.apache.ibatis.annotations.Param;

import com.shinchan.shop.domain.User;

public interface UserDao {
	
	/**
	 * 添加注册记录
	 * @param record
	 * @return
	 */
    int insert(User record);

    /**
	 * 添加注册记录
	 * @param record
	 * @return
	 */
    int insertSelective(User record);

    /**
     * 根据id查找一条注册信息
     * @param id
     * @return
     */
    User selectByPrimaryKey(Integer id);
    
    /**
     * 根据邮箱、电话查找用户密码
     * @param user
     * @return
     */
    String getUserPassword(User user);
    
    /**
     * 查找全部注册信息
     * @param id
     * @return
     */
    User selectAll();
    
    /**
     * 根据id删除注册信息
     * @param id
     * @return
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * 修改用户注册信息
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(User record);

    /**
     * 修改用户注册信息
     * @param record
     * @return
     */
    int updateByPrimaryKey(User record);

    /**
     * 检查邮箱是否存在
     * @param user
     * @return
     */
	int checkEmail(String email);
	
	/**
     * 检查邮箱是否存在
     * @param user
     * @return
     */
	int checkPhone(String phone);
}