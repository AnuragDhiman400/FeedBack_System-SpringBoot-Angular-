package com.anurag.restfulwebservicefeedback.jwt.resource;

public class AuthenticationException extends RuntimeException {
	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}
