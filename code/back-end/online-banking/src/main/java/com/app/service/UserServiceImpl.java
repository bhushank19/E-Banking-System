package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

//	private static final Logger LOG = LoggerFactory.getLogger(IUserService.class);

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private IAccountService accountService;

//	@Autowired
//    private BCryptPasswordEncoder passwordEncoder;

	@Override
	public User authenticateUser(String email, String password) {

		return userRepo.authenticateUser(email, password)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials !!!"));
	}

	@Override
	public boolean checkUserExists(String username, String email) {

		return checkUserNameExists(username) || checkEmailExists(email);
	}

	@Override
	public boolean checkEmailExists(String email) {

		return null != findByEmail(email);
	}

	@Override
	public boolean checkUserNameExists(String username) {

		return null != findByUserName(username);
	}

	@Override
	public User createUser(User user) {
		System.out.println(user);
		User localUser = userRepo.findByUserName(user.getUserName());

		if (localUser != null) {
//            LOG.info("User with username {} already exist. Nothing will be done. ", user.getUserName());
			System.out.println("User with username {} already exist.");
		} else {
//            String encryptedPassword = passwordEncoder.encode(user.getPassword());
//            user.setPassword(encryptedPassword);

//            for (UserRole ur : userRoles) {
//                roleDao.save(ur.getRole());
//            }

//            user.getUserRoles().addAll(userRoles);
			user.setRole(Role.CUSTOMER);
			user.setPrimaryAccount(accountService.createPrimaryAccount());
			user.setSavingsAccount(accountService.createSavingsAccount());

			localUser = userRepo.save(user);
		}

		return localUser;
	}

	@Override
	public User findByEmail(String email) {

		return userRepo.findByEmail(email);
	}

	@Override
	public User findByUserName(String userName) {
		System.out.println("findByUserName   " + userName);
		return userRepo.findByUserName(userName);
	}

	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	@Override
	public User getUserDetails(String userName) {
		// TODO Auto-generated method stub
		return userRepo.findByUserName(userName);
	}
	
}
