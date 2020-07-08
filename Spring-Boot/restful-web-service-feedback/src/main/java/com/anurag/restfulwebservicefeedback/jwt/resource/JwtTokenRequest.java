package com.anurag.restfulwebservicefeedback.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;
	private String category;

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password, String category) {
		this.setUsername(username);
		this.setPassword(password);
		this.setCategory(category);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getCategory() {
		return this.category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}