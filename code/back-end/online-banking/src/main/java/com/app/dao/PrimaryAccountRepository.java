package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.app.pojos.PrimaryAccount;

public interface PrimaryAccountRepository extends CrudRepository<PrimaryAccount, Long> {

	PrimaryAccount findByAccountNumber(int accountNumber);

	@Query("Select Max(p.accountNumber) from PrimaryAccount p")
	Optional<Integer> getMaxAccn();
}
