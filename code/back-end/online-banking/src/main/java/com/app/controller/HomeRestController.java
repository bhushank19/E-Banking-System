package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.User;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/")
public class HomeRestController {

	@Autowired
	private IUserService userService;

	public HomeRestController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
		System.out.println("in authenticateUser " + request);

		return new ResponseEntity<>(userService.authenticateUser(request.getEmail(), request.getPassword()),
				HttpStatus.OK);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> signupPost(@RequestBody User user, Model model) {
		System.out.println(user);
		if (userService.checkUserExists(user.getUserName(), user.getEmail())) {
			if (userService.checkEmailExists(user.getEmail())) {
				model.addAttribute("emailExists", true);
			}
			if (userService.checkUserNameExists(user.getUserName())) {
				model.addAttribute("usernameExists", true);
			}
			return new ResponseEntity<>(userService.checkUserExists(user.getUserName(), user.getEmail()),
					HttpStatus.NOT_ACCEPTABLE);
		} else {
			return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);
		}
	}

}
