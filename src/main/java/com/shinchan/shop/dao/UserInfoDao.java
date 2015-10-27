package com.shinchan.shop.dao;

import com.shinchan.shop.domain.User;
import com.shinchan.shop.domain.UserInfo;

public interface UserInfoDao {
	
	/**
	 * 添加用户详细记录
	 * @param record
	 * @return
	 */
    int insert(UserInfo record);

    /**
	 * 添加用户详细记录
	 * @param record
	 * @return
	 */
    int insertSelective(UserInfo record);

    /**
     * 根据id查找一条用户详细信息
     * @param id
     * @return
     */
    UserInfo selectByPrimaryKey(Integer id);
    
    /**
     * 查找全部用户信息
     * @param id
     * @return
     */
    User selectAll();
    
    /**
     * 根据id删除用户详细信息
     * @param id
     * @return
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * 修改用户详细信息
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(UserInfo record);

    /**
     * 修改用户详细信息
     * @param record
     * @return
     */
    int updateByPrimaryKey(UserInfo record);
}