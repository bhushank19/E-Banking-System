package com.app.service;

import java.util.List;

import com.app.pojos.Appointment;

public interface IAdminService {

	List<Appointment> findAll();

	Appointment findAppointment(Long id);

	void confirmedAppointment(Long id);
	
	void disableAccount(Long user_id);
	
	void enableAccount(Long user_id);

}
