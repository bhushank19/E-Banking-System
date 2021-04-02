package com.app.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.pojos.PrimaryTransaction;

public interface PrimaryTransactionRepository extends CrudRepository<PrimaryTransaction, Long> {
	List<PrimaryTransaction> findAll();

}
