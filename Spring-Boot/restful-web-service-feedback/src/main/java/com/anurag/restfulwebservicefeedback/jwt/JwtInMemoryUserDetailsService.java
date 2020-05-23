package com.anurag.restfulwebservicefeedback.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import com.anurag.restfulwebservicefeedback.Bean.CustomUserDetails;
import com.anurag.restfulwebservicefeedback.Bean.User;
import com.anurag.restfulwebservicefeedback.Repository.UserRepository;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
		Optional<User> optionalusers= userRepo.findByUsername(username);
		User users = optionalusers.get();
		
		System.out.println(users.getUsername());
		System.out.println(users.getSection());
		
		optionalusers
		.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
		
		return optionalusers
		.map( JwtUserDetails::new).get();
		
	}
	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
//				.filter(user -> user.getUsername().equals(username)).findFirst();
//
//		if (!findFirst.isPresent()) {
//			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
//		}
//
//		return findFirst.get();
//	}
	
	
	
/*	
//Working Code for JWT authentication with username	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
////		// TODO Auto-generated method stub
//		Optional<User> optionalusers= userRepo.findByUsername(username);
//		User users = optionalusers.get();
//		
//		System.out.println(users.getUsername());
//		System.out.println(users.getSection());
//		 
//		
//		optionalusers
//		.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
//		
//		return optionalusers
//		.map( JwtUserDetails::new).get();
//		
//
//	}
	*/
	

//	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
//
//	static {
//		inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
//				"$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
//		inMemoryUserList.add(new JwtUserDetails(2L, "ranga",
//				"$2a$10$IetbreuU5KihCkDB6/r1DOJO0VyU9lSiBcrMDT.biU7FOt2oqZDPm", "ROLE_USER_2"));
//		inMemoryUserList.add(new JwtUserDetails(3L, "anurag",
//				"$2a$10$jXst.TWz204rB.VBHpJvDOjq8rwSId1IcMsuoobr3z0oLYB9lCxyu", "ROLE_USER_2"));
//		
//		//$2a$10$4wnkOrYYaDTZvwWVhFYU6eN.OTNrSQgY4kmqtrDIh1/sbKvoEID1S
//		//$2a$10$IetbreuU5KihCkDB6/r1DOJO0VyU9lSiBcrMDT.biU7FOt2oqZDPm
//	}
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
//				.filter(user -> user.getUsername().equals(username)).findFirst();
//
//		if (!findFirst.isPresent()) {
//			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
//		}
//
//		return findFirst.get();
//	}
	 
	   
}
