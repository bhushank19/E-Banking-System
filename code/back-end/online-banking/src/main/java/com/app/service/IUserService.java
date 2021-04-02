package com.app.service;

import com.app.pojos.User;

public interface IUserService {
	User authenticateUser(String email, String password);

	boolean checkUserExists(String userName, String email);

	boolean checkEmailExists(String email);

	boolean checkUserNameExists(String userName);

	User createUser(User user);

	User findByEmail(String email);

	User findByUserName(String userName);

	User saveUser(User user);

	User getUserDetails(String userName);

}
