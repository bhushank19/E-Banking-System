package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserRepository;
import com.app.pojos.Appointment;
import com.app.pojos.User;
import com.app.service.IAdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
//@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

	@Autowired
	private IAdminService adminService;

	@Autowired
	private UserRepository userRepo;

	@RequestMapping("/appointment/all")
	public ResponseEntity<?> findAppointmentList() {
		List<Appointment> appointmentList = adminService.findAll();

		return new ResponseEntity<>(appointmentList, HttpStatus.OK);
	}

	@GetMapping("/appointment/confirm/{id}")
	public ResponseEntity<?> confirmedAppointment(@PathVariable Long id) {

		adminService.confirmedAppointment(id);
		return new ResponseEntity<>("Appointment confirm", HttpStatus.OK);

	}

	@GetMapping("/userlist")
	public List<User> displayAllUser() {
		List<User> userlist = userRepo.findAll();
		return userlist;
	}

	@GetMapping("/disable/{user_id}")
	public ResponseEntity<?> disableAccount(@PathVariable Long user_id) {
		adminService.disableAccount(user_id);
		return new ResponseEntity<>("Account has been disable", HttpStatus.OK);
	}

	@GetMapping("/enable/{user_id}")
	public ResponseEntity<?> enableAccount(@PathVariable Long user_id) {
		adminService.enableAccount(user_id);
		return new ResponseEntity<>("Account has been enable", HttpStatus.OK);
	}
}
