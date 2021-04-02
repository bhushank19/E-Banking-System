package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("Select  u from User u where u.email=:em and u.password=:pwd")
	Optional<User> authenticateUser(@Param("em") String email, @Param("pwd") String password);

	User findByEmail(String email);

	User findByUserName(String userName);
}
