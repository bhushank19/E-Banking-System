package com.app.service;

import com.app.pojos.PrimaryAccount;
import com.app.pojos.SavingsAccount;

public interface IAccountService {

	PrimaryAccount createPrimaryAccount();

	SavingsAccount createSavingsAccount();

	void deposit(String accountType, double amount, String userName);

	void withdraw(String accountType, double amount, String userName);

}
