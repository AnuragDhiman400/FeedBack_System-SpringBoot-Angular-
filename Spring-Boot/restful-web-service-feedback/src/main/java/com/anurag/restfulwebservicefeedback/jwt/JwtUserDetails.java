package com.anurag.restfulwebservicefeedback.jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.anurag.restfulwebservicefeedback.Bean.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class JwtUserDetails extends User implements UserDetails {

	private static final long serialVersionUID = 5155720064139820502L;


	public JwtUserDetails(final User users)
	{
		super(users);
	}
	
	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
////		 return getRoles()
////	                .stream()
////	                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRole()))
////	                .collect(Collectors.toList());
//	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return super.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return super.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

}
