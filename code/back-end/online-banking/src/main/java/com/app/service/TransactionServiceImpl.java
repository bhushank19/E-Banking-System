package com.app.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PrimaryAccountRepository;
import com.app.dao.PrimaryTransactionRepository;
import com.app.dao.RecipientRepository;
import com.app.dao.SavingsAccountRepository;
import com.app.dao.SavingsTransactionRepository;
import com.app.pojos.PrimaryAccount;
import com.app.pojos.PrimaryTransaction;
import com.app.pojos.Recipient;
import com.app.pojos.SavingsAccount;
import com.app.pojos.SavingsTransaction;
import com.app.pojos.User;

@Service
@Transactional
public class TransactionServiceImpl implements ITransactionService {

	@Autowired
	private PrimaryTransactionRepository primaryTransactionRepo;

	@Autowired
	private SavingsTransactionRepository savingsTransactionRepo;

	@Autowired
	private PrimaryAccountRepository primaryAccountRepo;

	@Autowired
	private SavingsAccountRepository savingsAccountRepo;

	@Autowired
	private RecipientRepository recipientRepo;

	@Autowired
	private IUserService userService;

	@Override
	public List<PrimaryTransaction> findPrimaryTransactionList(String userName) {
		User user = userService.findByUserName(userName);
		List<PrimaryTransaction> primaryTransactionList = user.getPrimaryAccount().getPrimaryTransactionList();

		return primaryTransactionList;
	}

	@Override
	public List<SavingsTransaction> findSavingsTransactionList(String userName) {
		User user = userService.findByUserName(userName);
		List<SavingsTransaction> savingsTransactionList = user.getSavingsAccount().getSavingsTransactionList();

		return savingsTransactionList;
	}

	@Override
	public void savePrimaryDepositTransaction(PrimaryTransaction primaryTransaction) {
		primaryTransactionRepo.save(primaryTransaction);
	}

	@Override
	public void saveSavingsDepositTransaction(SavingsTransaction savingsTransaction) {
		savingsTransactionRepo.save(savingsTransaction);
	}

	@Override
	public void savePrimaryWithdrawTransaction(PrimaryTransaction primaryTransaction) {
		primaryTransactionRepo.save(primaryTransaction);
	}

	@Override
	public void saveSavingsWithdrawTransaction(SavingsTransaction savingsTransaction) {
		savingsTransactionRepo.save(savingsTransaction);
	}

	@Override
	public void betweenAccountsTransfer(String transferFrom, String transferTo, double amount,
			PrimaryAccount primaryAccount, SavingsAccount savingsAccount, User user) throws Exception {
//		BigDecimal amount1 = user.getPrimaryAccount().getAccountBalance();
//		double amount2 = amount1.doubleValue();
//		System.out.println("amount2=" + amount2);
		if (transferFrom.equals("Primary") && transferTo.equals("Savings") ) {
			primaryAccount.setAccountBalance(primaryAccount.getAccountBalance().subtract(new BigDecimal(amount)));
			savingsAccount.setAccountBalance(savingsAccount.getAccountBalance().add(new BigDecimal(amount)));
			primaryAccountRepo.save(primaryAccount);
			savingsAccountRepo.save(savingsAccount);

			Date date = new Date();

			PrimaryTransaction primaryTransaction = new PrimaryTransaction(date,
					"Between account transfer from " + transferFrom + " to " + transferTo, "Account", "Finished",
					amount, primaryAccount.getAccountBalance(), primaryAccount);
			primaryTransactionRepo.save(primaryTransaction);

		} else if (transferFrom.equals("Savings") && transferTo.equals("Primary")
				) {
			primaryAccount.setAccountBalance(primaryAccount.getAccountBalance().add(new BigDecimal(amount)));
			savingsAccount.setAccountBalance(savingsAccount.getAccountBalance().subtract(new BigDecimal(amount)));
			primaryAccountRepo.save(primaryAccount);
			savingsAccountRepo.save(savingsAccount);

			Date date = new Date();

			SavingsTransaction savingsTransaction = new SavingsTransaction(date,
					"Between account transfer from " + transferFrom + " to " + transferTo, "Transfer", "Finished",
					amount, savingsAccount.getAccountBalance(), savingsAccount);
			savingsTransactionRepo.save(savingsTransaction);
		} else {
			throw new Exception("Invalid Transfer");
		}
	}

	@Override
	public List<Recipient> findRecipientList(String userName) {
//		 String username = principal.getName();
		List<Recipient> recipientList = recipientRepo.findAll().stream()
				.filter(recipient -> userName.equals(recipient.getUser().getUserName())).collect(Collectors.toList());

		return recipientList;
	}

	@Override
	public Recipient saveRecipient(Recipient recipient) {
		return recipientRepo.save(recipient);

	}

	@Override
	public Recipient findRecipientByName(String recipientName) {

		return recipientRepo.findByName(recipientName);
	}

	@Override
	public void toSomeoneElseTransfer(Recipient recipient, String accountType, double amount,
			PrimaryAccount primaryAccount, SavingsAccount savingsAccount) {
		if (accountType.equalsIgnoreCase("Primary")) {
			primaryAccount.setAccountBalance(primaryAccount.getAccountBalance().subtract(new BigDecimal(amount)));
			primaryAccountRepo.save(primaryAccount);

			Date date = new Date();

			PrimaryTransaction primaryTransaction = new PrimaryTransaction(date,
					"Transfer to recipient " + recipient.getName(), "Transfer", "Finished", amount,
					primaryAccount.getAccountBalance(), primaryAccount);
			primaryTransactionRepo.save(primaryTransaction);
		} else if (accountType.equalsIgnoreCase("Savings")) {
			savingsAccount.setAccountBalance(savingsAccount.getAccountBalance().subtract(new BigDecimal(amount)));
			savingsAccountRepo.save(savingsAccount);

			Date date = new Date();

			SavingsTransaction savingsTransaction = new SavingsTransaction(date,
					"Transfer to recipient " + recipient.getName(), "Transfer", "Finished", amount,
					savingsAccount.getAccountBalance(), savingsAccount);
			savingsTransactionRepo.save(savingsTransaction);
		}

	}
	
	@Override
	public void deleteRecipientByName(String recipientName) {
		recipientRepo.deleteByName(recipientName);
		
	}
	
}
