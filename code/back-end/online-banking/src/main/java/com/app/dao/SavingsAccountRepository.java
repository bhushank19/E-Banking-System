package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.app.pojos.SavingsAccount;

public interface SavingsAccountRepository extends CrudRepository<SavingsAccount, Long> {

	SavingsAccount findByAccountNumber(int accountNumber);

	@Query("Select Max(s.accountNumber) from SavingsAccount s")
	Optional<Integer> getMaxAccn();
}
