package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BetweenAccountsTransfer;
import com.app.dto.SaveRecipientRequest;
import com.app.dto.ToSomeoneElse;
import com.app.pojos.PrimaryAccount;
import com.app.pojos.Recipient;
import com.app.pojos.SavingsAccount;
import com.app.pojos.User;
import com.app.service.ITransactionService;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/transfer")
public class TransferController {

	@Autowired
	private ITransactionService transactionService;

	@Autowired
	private IUserService userService;

	public TransferController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	@PostMapping("/betweenAccounts")
	public ResponseEntity<?> betweenAccountsPost(@RequestBody BetweenAccountsTransfer request) throws Exception {
		System.out.println(request);
		User user = userService.findByUserName(request.getUserName());
		PrimaryAccount primaryAccount = user.getPrimaryAccount();
		SavingsAccount savingsAccount = user.getSavingsAccount();
		transactionService.betweenAccountsTransfer(request.getTransferFrom(), request.getTransferTo(),
				request.getAmount(), primaryAccount, savingsAccount, user);

		return new ResponseEntity<>("Transfer Between Account Successful", HttpStatus.OK);
	}

	@GetMapping("/recipient/{userName}")
	public ResponseEntity<?> recipientList(@PathVariable String userName) {
		List<Recipient> recipientList = transactionService.findRecipientList(userName);

		return new ResponseEntity<>(recipientList, HttpStatus.OK);
	}

	@PostMapping("/recipient/save")
	public ResponseEntity<?> recipientPost(@RequestBody SaveRecipientRequest request) {
		Recipient recipient = new Recipient();
		User user = userService.findByUserName(request.getUserName());
		recipient.setUser(user);
		recipient.setAccountNumber(request.getAccountNumber());
		recipient.setName(request.getName());
		recipient.setEmail(request.getEmail());
		recipient.setPhone(request.getPhone());
		recipient.setDescription(request.getDescription());
		transactionService.saveRecipient(recipient);

		return new ResponseEntity<>("Recipient Saved", HttpStatus.OK);
	}

	@PostMapping("/toSomeoneElse/{userName}")
	public ResponseEntity<?> toSomeoneElsePost(@RequestBody ToSomeoneElse request, @PathVariable String userName) {
		User user = userService.findByUserName(userName);
		Recipient recipient = transactionService.findRecipientByName(request.getRecipientName());
		System.out.println(recipient);
		System.out.println(user);
		transactionService.toSomeoneElseTransfer(recipient, request.getAccountType(), request.getAmount(),
				user.getPrimaryAccount(), user.getSavingsAccount());

		return new ResponseEntity<>("Transfer Successful", HttpStatus.OK);
	}

	@DeleteMapping("/recipient/delete/{recipientName}")
	public ResponseEntity<?> recipientDelete(@PathVariable String recipientName) {
		transactionService.deleteRecipientByName(recipientName);
		return new ResponseEntity<>("Recipient Deleted Successful", HttpStatus.OK);
	}
}
