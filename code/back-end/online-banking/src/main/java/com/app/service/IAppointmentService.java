package com.app.service;

import java.util.List;

import com.app.pojos.Appointment;

public interface IAppointmentService {
	Appointment createAppointment(Appointment appointment);

	List<Appointment> findAll();

	Appointment findAppointment(Long id);

	void confirmAppointment(Long id);

}
