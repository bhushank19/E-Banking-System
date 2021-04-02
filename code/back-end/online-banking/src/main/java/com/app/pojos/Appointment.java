package com.app.pojos;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date date;
	private String location;
	private String description;
	private boolean confirmed;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public Appointment() {
		System.out.println("in ctor of " + getClass().getName());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isConfirmed() {
		return confirmed;
	}

	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}

	@JsonIgnore //ignore this property during ser.
	public User getUser() {
		return user;
	}
	@JsonProperty //DO NOT ignore this property during de-ser (since you want to assign customer id as FK)
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", date=" + date + ", location=" + location + ", description=" + description
				+ ", confirmed=" + confirmed + "]";
	}

}
