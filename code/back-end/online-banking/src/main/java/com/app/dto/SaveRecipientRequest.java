package com.app.dto;

public class SaveRecipientRequest {
	private String userName;
	private String name;
	private String email;
	private String phone;
	private String accountNumber;
	private String description;

	public SaveRecipientRequest() {
		System.out.println("in ctor of " + getClass().getName());
	}

	public SaveRecipientRequest(String userName, String name, String email, String phone, String accountNumber,
			String description) {
		super();
		this.userName = userName;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.accountNumber = accountNumber;
		this.description = description;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "SaveRecipient [userName=" + userName + ", name=" + name + ", email=" + email + ", phone=" + phone
				+ ", accountNumber=" + accountNumber + ", description=" + description + "]";
	}

}
