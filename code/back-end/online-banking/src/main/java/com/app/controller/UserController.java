package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UpdateProfileRequest;
import com.app.pojos.User;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private IUserService userService;

	@GetMapping("/profile/{userName}")
	public ResponseEntity<?> profile(@PathVariable String userName, Model model) {
		User user = userService.findByUserName(userName);

		model.addAttribute("user", user);
		System.out.println(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@PostMapping("/update/{userName}")
	public ResponseEntity<?> profilePost(@RequestBody UpdateProfileRequest request, @PathVariable String userName) {

		User user = userService.findByUserName(userName);

		user.setUserName(request.getUserName());
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setPassword(request.getPassword());
		user.setEmail(request.getEmail());
		user.setPhone(request.getPhone());
		System.out.println(user);

		userService.saveUser(user);

		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@GetMapping("/getuser/{userName}")
	public ResponseEntity<?> getUserDetails(@PathVariable String userName) {
		System.out.println(userName);
		User user = userService.getUserDetails(userName);
		System.out.println(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

}
