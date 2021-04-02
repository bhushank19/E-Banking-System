package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AppointmentRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Appointment;
import com.app.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AppointmentRepository appointmentRepo;
	
	@Autowired 
	private UserRepository userRepo;

	@Override
	public List<Appointment> findAll() {
		return appointmentRepo.findAll();
	}

	@Override
	public Appointment findAppointment(Long id) {
		return appointmentRepo.findById(id).get();
	}

	@Override
	public void confirmedAppointment(Long id) {
		Appointment appointment = findAppointment(id);
		appointment.setConfirmed(true);
		appointmentRepo.save(appointment);
	}

	public User findUser(Long user_id) {
		return userRepo.findById(user_id).get();
	}
	
	@Override
	public void disableAccount(Long user_id) {
		User user = findUser(user_id);
		user.setEnabled(false);
		userRepo.save(user);
		
	}

	@Override
	public void enableAccount(Long user_id) {
		User user = findUser(user_id);
		user.setEnabled(true);
		userRepo.save(user);
		
	}

}
