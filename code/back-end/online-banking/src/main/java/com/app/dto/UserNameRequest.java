package com.app.dto;

public class UserNameRequest {
	private String userName;

	public UserNameRequest() {
		System.out.println("in ctor of " + getClass().getName());
	}

	public UserNameRequest(String userName) {
		super();
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "UserNameRequest [userName=" + userName + "]";
	}

}
