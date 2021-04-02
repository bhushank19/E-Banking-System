package com.app.dto;

public class BetweenAccountsTransfer {
	private String transferFrom;
	private String transferTo;
	private double amount;
	private String userName;

	public BetweenAccountsTransfer() {
		System.out.println("in betweenAccountTransfer " + getClass().getName());
	}

	public BetweenAccountsTransfer(String transferFrom, String transferTo, double amount, String userName) {
		this.transferFrom = transferFrom;
		this.transferTo = transferTo;
		this.amount = amount;
		this.userName = userName;
	}

	public String getTransferFrom() {
		return transferFrom;
	}

	public void setTransferFrom(String transferFrom) {
		this.transferFrom = transferFrom;
	}

	public String getTransferTo() {
		return transferTo;
	}

	public void setTransferTo(String transferTo) {
		this.transferTo = transferTo;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "BetweenAccountsTransfer [transferFrom=" + transferFrom + ", transferTo=" + transferTo + ", amount="
				+ amount + ", userName=" + userName + "]";
	}

}
