package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AppointmentRepository;
import com.app.pojos.Appointment;

@Service
@Transactional
public class AppoinmentServiceImpl implements IAppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepo;

	public Appointment createAppointment(Appointment appointment) {
		return appointmentRepo.save(appointment);
	}

	public List<Appointment> findAll() {
		return appointmentRepo.findAll();
	}

	public Appointment findAppointment(Long id) {
		return appointmentRepo.findById(id).get();
	}

	public void confirmAppointment(Long id) {
		Appointment appointment = findAppointment(id);
		appointment.setConfirmed(true);
		appointmentRepo.save(appointment);
	}

}
