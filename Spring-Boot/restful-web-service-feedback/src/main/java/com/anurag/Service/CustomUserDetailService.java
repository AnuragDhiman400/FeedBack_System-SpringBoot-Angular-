package com.anurag.Service;

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
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
		Optional<User> optionalusers= userRepo.findByUsername(username);
		
		 
		
		optionalusers
		.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
		
		return optionalusers
		.map( CustomUserDetails::new).get();
		

	}
}
