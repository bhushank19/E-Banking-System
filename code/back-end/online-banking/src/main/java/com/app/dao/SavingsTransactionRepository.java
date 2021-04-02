package com.app.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.pojos.SavingsTransaction;

public interface SavingsTransactionRepository extends CrudRepository<SavingsTransaction, Long> {
	List<SavingsTransaction> findAll();

}
