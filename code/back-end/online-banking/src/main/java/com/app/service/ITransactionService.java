package com.app.service;

import java.util.List;

import com.app.pojos.PrimaryAccount;
import com.app.pojos.PrimaryTransaction;
import com.app.pojos.Recipient;
import com.app.pojos.SavingsAccount;
import com.app.pojos.SavingsTransaction;
import com.app.pojos.User;

public interface ITransactionService {

	List<PrimaryTransaction> findPrimaryTransactionList(String userName);

	List<SavingsTransaction> findSavingsTransactionList(String userName);

	void savePrimaryDepositTransaction(PrimaryTransaction primaryTransaction);

	void saveSavingsDepositTransaction(SavingsTransaction savingsTransaction);

	void savePrimaryWithdrawTransaction(PrimaryTransaction primaryTransaction);

	void saveSavingsWithdrawTransaction(SavingsTransaction savingsTransaction);

	void betweenAccountsTransfer(String transferFrom, String transferTo, double amount, PrimaryAccount primaryAccount,
			SavingsAccount savingsAccount, User user) throws Exception;

	List<Recipient> findRecipientList(String userName);

	Recipient saveRecipient(Recipient recipient);

	Recipient findRecipientByName(String recipientName);

	void toSomeoneElseTransfer(Recipient recipient, String accountType, double amount, PrimaryAccount primaryAccount,
			SavingsAccount savingsAccount);

	 void deleteRecipientByName(String recipientName);
	 
}
