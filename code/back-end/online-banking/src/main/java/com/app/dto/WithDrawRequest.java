package com.app.dto;

public class WithDrawRequest {
	private String accountType;
	private double amount;
	private String userName;

	public WithDrawRequest() {
		System.out.println("in ctor of"+getClass().getName());
	}

	public WithDrawRequest(double amount, String accountType, String userName) {
		super();
		this.amount = amount;
		this.accountType = accountType;
		this.userName = userName;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "DepositRequest [amount=" + amount + ", accountType=" + accountType + ", userName=" + userName + "]";
	}
	


}
