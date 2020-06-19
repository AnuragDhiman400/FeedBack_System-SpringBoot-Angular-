//package com.anurag.springSecurity;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.anurag.Service.CustomUserDetailService;
//import com.anurag.restfulwebservicefeedback.Repository.UserRepository;
//
//
//@EnableJpaRepositories(basePackageClasses = UserRepository.class)
//@Configuration
//@EnableWebSecurity
//public class Security extends WebSecurityConfigurerAdapter {
//	
//	
//	
//	@Autowired
//	private CustomUserDetailService userDetailsService;
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		// TODO Auto-generated method stub
//		auth.userDetailsService(userDetailsService)
//		.passwordEncoder(getPasswordEncoder());
//	}
//	
//	  private PasswordEncoder getPasswordEncoder() {
//	        return new PasswordEncoder() {
//	            @Override
//	            public String encode(CharSequence charSequence) {
//	                return charSequence.toString();
//	            }
//
//	            @Override
//	            public boolean matches(CharSequence charSequence, String s) {
//	            	return encode(charSequence).equals(s);
//	            }
//	        };
//	    }
//	
//	   
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//		.csrf().disable()	
//		.authorizeRequests()
//		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//				.anyRequest().authenticated()
//				.and()
//			//.formLogin().and()
//			.httpBasic();
//		http.headers().frameOptions().disable();
//	}
// 
//
//
//}
