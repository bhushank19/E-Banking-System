package com.app.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.pojos.Recipient;

public interface RecipientRepository extends CrudRepository<Recipient, Long> {

	List<Recipient> findAll();

	Recipient findByName(String recipientName);
	
	 void deleteByName(String recipientName);
}
