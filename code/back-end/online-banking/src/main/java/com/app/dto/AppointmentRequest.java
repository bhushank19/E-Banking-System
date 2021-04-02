package com.app.dto;

public class AppointmentRequest {
	private String userName;
	private String date;
	private String description;
	private String location;
	private long user_id;

	public AppointmentRequest() {
		System.out.println("in ctor of" + getClass().getName());
	}

	public AppointmentRequest(String userName, String date, String description, String location, long user_id) {
		super();
		this.userName = userName;
		this.date = date;
		this.description = description;
		this.location = location;
		this.user_id = user_id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "AppointmentRequest [userName=" + userName + ", date=" + date + ", description=" + description
				+ ", location=" + location + ", user_id=" + user_id + "]";
	}

}
