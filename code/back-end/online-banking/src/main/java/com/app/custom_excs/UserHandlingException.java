package com.app.custom_excs;

public class UserHandlingException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public UserHandlingException(String errMesg) {
		super(errMesg);
	}

}