package com.anurag.restfulwebservicefeedback.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;
	private String section;

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password, String section) {
		this.setUsername(username);
		this.setPassword(password);
		this.setSection(section);
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

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}
	
	
}
