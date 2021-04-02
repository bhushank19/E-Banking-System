package com.app.custom_excs;

@SuppressWarnings("serial")
public class BankAccountHandlingException extends RuntimeException {
	public BankAccountHandlingException(String mesg) {
		super(mesg);
	}
}
