package com.app.service;

import java.math.BigDecimal;
import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PrimaryAccountRepository;
import com.app.dao.SavingsAccountRepository;
import com.app.pojos.PrimaryAccount;
import com.app.pojos.PrimaryTransaction;
import com.app.pojos.SavingsAccount;
import com.app.pojos.SavingsTransaction;
import com.app.pojos.User;

@Service
@Transactional
public class AccountServiceImpl implements IAccountService {

	private static int nextAccountNumber = 8000;

	@Autowired
	private SavingsAccountRepository savingsAccountRepo;

	@Autowired
	private PrimaryAccountRepository primaryAccountRepo;

	@Autowired
	private IUserService userService;

	@Autowired
	private ITransactionService transactionService;

	@Override
	public PrimaryAccount createPrimaryAccount() {
		PrimaryAccount primaryAccount = new PrimaryAccount();
		primaryAccount.setAccountBalance(new BigDecimal(0.0));
		primaryAccount.setAccountNumber(accountGen());
		primaryAccountRepo.save(primaryAccount);

		return primaryAccountRepo.findByAccountNumber(primaryAccount.getAccountNumber());
	}

	@Override
	public SavingsAccount createSavingsAccount() {
		SavingsAccount savingsAccount = new SavingsAccount();
		savingsAccount.setAccountBalance(new BigDecimal(0.0));
		savingsAccount.setAccountNumber(accountGen());
		savingsAccountRepo.save(savingsAccount);

		return savingsAccountRepo.findByAccountNumber(savingsAccount.getAccountNumber());
	}

	@Override
	public void deposit(String accountType, double amount, String userName) {
//		double amount = Double.parseDouble(amount1);
		User user = userService.findByUserName(userName);
		System.out.println(user);
		System.out.println(accountType + " " + amount + " " + userName);
		if (accountType.equals("Primary")) {
			PrimaryAccount primaryAccount = user.getPrimaryAccount();
			primaryAccount.setAccountBalance(primaryAccount.getAccountBalance().add(new BigDecimal(amount)));
			primaryAccountRepo.save(primaryAccount);

			Date date = new Date();

			PrimaryTransaction primaryTransaction = new PrimaryTransaction(date, "Deposit to Primary Account",
					"Account", "Finished", amount, primaryAccount.getAccountBalance(), primaryAccount);
			transactionService.savePrimaryDepositTransaction(primaryTransaction);

		} else if (accountType.equals("Savings")) {
			SavingsAccount savingsAccount = user.getSavingsAccount();
			savingsAccount.setAccountBalance(savingsAccount.getAccountBalance().add(new BigDecimal(amount)));
			savingsAccountRepo.save(savingsAccount);

			Date date = new Date();
			SavingsTransaction savingsTransaction = new SavingsTransaction(date, "Deposit to savings Account",
					"Account", "Finished", amount, savingsAccount.getAccountBalance(), savingsAccount);
			transactionService.saveSavingsDepositTransaction(savingsTransaction);
		}
	}

	@Override
	public void withdraw(String accountType, double amount, String userName) {
		User user = userService.findByUserName(userName);
		System.out.println(user);
		if (accountType.equals("Primary")) {
			PrimaryAccount primaryAccount = user.getPrimaryAccount();
			primaryAccount.setAccountBalance(primaryAccount.getAccountBalance().subtract(new BigDecimal(amount)));
			primaryAccountRepo.save(primaryAccount);

			Date date = new Date();

			PrimaryTransaction primaryTransaction = new PrimaryTransaction(date, "Withdraw from Primary Account",
					"Account", "Finished", amount, primaryAccount.getAccountBalance(), primaryAccount);
			transactionService.savePrimaryWithdrawTransaction(primaryTransaction);
		} else if (accountType.equals("Savings")) {
			SavingsAccount savingsAccount = user.getSavingsAccount();
			savingsAccount.setAccountBalance(savingsAccount.getAccountBalance().subtract(new BigDecimal(amount)));
			savingsAccountRepo.save(savingsAccount);

			Date date = new Date();
			SavingsTransaction savingsTransaction = new SavingsTransaction(date, "Withdraw from savings Account",
					"Account", "Finished", amount, savingsAccount.getAccountBalance(), savingsAccount);
			transactionService.saveSavingsWithdrawTransaction(savingsTransaction);
		}

	}

	private int accountGen() {
		return ++nextAccountNumber;
	}

}
