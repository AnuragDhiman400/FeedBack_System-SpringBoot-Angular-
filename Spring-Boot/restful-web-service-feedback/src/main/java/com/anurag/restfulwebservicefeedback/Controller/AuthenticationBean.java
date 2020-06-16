package com.anurag.restfulwebservicefeedback.Controller;

public class AuthenticationBean {
	private String username;



	public AuthenticationBean(String username) {
		super();
		this.username = username;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	@Override
	public String toString() {
		return "AuthenticationBean [username=" + username + "]";
	}



	
}
