package com.app.dto;

public class ToSomeoneElse {
	private String recipientName;
	private String accountType;
	private double amount;

	public ToSomeoneElse() {
		System.out.println("in ctor of " + getClass().getName());
	}

	public ToSomeoneElse(String recipientName, String accountType, double amount) {
		super();
		this.recipientName = recipientName;
		this.accountType = accountType;
		this.amount = amount;
	}

	public String getRecipientName() {
		return recipientName;
	}

	public void setRecipientName(String recipientName) {
		this.recipientName = recipientName;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "ToSomeoneElse [recipientName=" + recipientName + ", accountType=" + accountType + ", amount=" + amount
				+ "]";
	}

}
