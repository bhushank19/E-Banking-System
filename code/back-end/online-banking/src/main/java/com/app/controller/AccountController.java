package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DepositRequest;
import com.app.dto.UserNameRequest;
import com.app.dto.WithDrawRequest;
import com.app.pojos.PrimaryAccount;
import com.app.pojos.PrimaryTransaction;
import com.app.pojos.SavingsAccount;
import com.app.pojos.SavingsTransaction;
import com.app.pojos.User;
import com.app.service.IAccountService;
import com.app.service.ITransactionService;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/account")
public class AccountController {

	@Autowired
	private IAccountService accountService;

	@Autowired
	private ITransactionService transactionService;

	@Autowired
	private IUserService userService;

	public AccountController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	@GetMapping("/savingsAccount/{userName}")
	public ResponseEntity<?> savingsAccount(@PathVariable String userName, Model model) {
		List<SavingsTransaction> savingsTransactionList = transactionService
				.findSavingsTransactionList(userName);
		User user = userService.findByUserName(userName);
		SavingsAccount savingsAccount = user.getSavingsAccount();

		model.addAttribute("savingsAccount", savingsAccount);
		model.addAttribute("savingsTransactionList", savingsTransactionList);
		return new ResponseEntity<>(savingsTransactionList, HttpStatus.OK);
	}

	@GetMapping("/primaryAccount/{userName}")
	public ResponseEntity<?> primaryAccount(@PathVariable String userName, Model model) {
		List<PrimaryTransaction> primaryTransactionList = transactionService
				.findPrimaryTransactionList(userName);

		User user = userService.findByUserName(userName);
		PrimaryAccount primaryAccount = user.getPrimaryAccount();

		model.addAttribute("primaryAccount", primaryAccount);
		model.addAttribute("primaryTransactionList", primaryTransactionList);

		return new ResponseEntity<>(primaryTransactionList, HttpStatus.OK);
	}

	@GetMapping("/deposit")
	public String deposit(Model model) {
		model.addAttribute("accountType", "");
		model.addAttribute("amount", "");

		return "deposit";
	}

	@PostMapping("/deposit/{userName}")
	public ResponseEntity<?> depositPost(@PathVariable String userName, @RequestBody DepositRequest request) {

		System.out.println("in depositPost " + request);
		accountService.deposit(request.getAccountType(), request.getAmount(), userName);
		return new ResponseEntity<>("Amount Deposit Successfully", HttpStatus.OK);

	}

	@GetMapping("/withdraw")
	public String withDraw(Model model) {
		model.addAttribute("accountType", "");
		model.addAttribute("amount", "");

		return "withdraw";
	}

	@PostMapping("/withdraw/{userName}")
	public ResponseEntity<?> withDrawPost(@PathVariable String userName, @RequestBody WithDrawRequest request) {
		System.out.println("in withDraw " + request);
		accountService.withdraw(request.getAccountType(), request.getAmount(), userName);

		return new ResponseEntity<>("Amount WithDraw Successfully", HttpStatus.OK);
	}

}