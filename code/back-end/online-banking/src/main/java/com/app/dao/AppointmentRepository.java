package com.app.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.pojos.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {

	List<Appointment> findAll();
	
	 //Appointment findAppointment(Long id);
	
	//void confirmedAppointment(Long id);
}