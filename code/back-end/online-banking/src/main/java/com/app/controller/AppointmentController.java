package com.app.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

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

import com.app.dto.AppointmentRequest;
import com.app.pojos.Appointment;
import com.app.pojos.User;
import com.app.service.IAppointmentService;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/appointment")
public class AppointmentController {

	@Autowired
	private IUserService userService;

	@Autowired
	private IAppointmentService appointmentService;

	public AppointmentController() {
		System.out.println("in side ctr  " + getClass().getName());
	}

	@GetMapping("/create")
	public ResponseEntity<?> createAppointment(Model model) {
		Appointment appointment = new Appointment();
		model.addAttribute("appointment", appointment);
		model.addAttribute("dateString", "");

		return new ResponseEntity<>("Get Appointment", HttpStatus.OK);
	}

	@PostMapping("/create/{userName}")
	public ResponseEntity<?> createAppointmentPost(@PathVariable String userName , @RequestBody AppointmentRequest request) throws java.text.ParseException {
		System.out.println("inside createAppointmentPost ");
		System.out.println(request.getDate());
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd hh:mm");
		Date d1 = format1.parse(request.getDate());
		Appointment appointment = new Appointment();
		appointment.setDate(d1);
		appointment.setDescription(request.getDescription());
		appointment.setLocation(request.getLocation());

		User user = userService.findByUserName(userName);
		appointment.setUser(user);

		appointmentService.createAppointment(appointment);

		return new ResponseEntity<>("Appointment created", HttpStatus.OK);
	}

}
