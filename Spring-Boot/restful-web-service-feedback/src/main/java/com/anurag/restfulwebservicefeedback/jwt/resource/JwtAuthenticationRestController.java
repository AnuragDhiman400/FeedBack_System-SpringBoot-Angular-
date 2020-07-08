

package com.anurag.restfulwebservicefeedback.jwt.resource;

import java.util.HashMap;
import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.anurag.restfulwebservicefeedback.Bean.User;
import com.anurag.restfulwebservicefeedback.Repository.UserRepository;
import com.anurag.restfulwebservicefeedback.jwt.JwtTokenUtil;
import com.anurag.restfulwebservicefeedback.jwt.JwtUserDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtAuthenticationRestController {

	@Value("${jwt.http.request.header}")
	private String tokenHeader;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserDetailsService jwtInMemoryUserDetailsService;

	@Autowired
	private UserRepository userRepo;
	
	@RequestMapping(value = "${jwt.get.token.uri}", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenRequest authenticationRequest)
			throws AuthenticationException {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword(), authenticationRequest.getCategory());

		final UserDetails userDetails = jwtInMemoryUserDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		
		final User user = userRepo.findUser(authenticationRequest.getUsername(), authenticationRequest.getPassword(), authenticationRequest.getCategory());
		final String token = jwtTokenUtil.generateToken(userDetails);
		final HashMap<String, Object> map = new HashMap<>();
		
                 if (user == null) {
			return new ResponseEntity<Object>(HttpStatus.UNAUTHORIZED);
		}
		
		map.put("token", new JwtTokenResponse(token).getToken());
		map.put("UserData", user);
		
		return ResponseEntity.ok(map);
	}

	@RequestMapping(value = "${jwt.refresh.token.uri}", method = RequestMethod.GET)
	public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
		String authToken = request.getHeader(tokenHeader);
		final String token = authToken.substring(7);
		String username = jwtTokenUtil.getUsernameFromToken(token);
		JwtUserDetails user = (JwtUserDetails) jwtInMemoryUserDetailsService.loadUserByUsername(username);

		if (jwtTokenUtil.canTokenBeRefreshed(token)) {
			String refreshedToken = jwtTokenUtil.refreshToken(token);
			return ResponseEntity.ok(new JwtTokenResponse(refreshedToken));
		} else {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@ExceptionHandler({ AuthenticationException.class })
	public ResponseEntity<String> handleAuthenticationException(AuthenticationException e) {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
	}

	private void authenticate(String username, String password, String category) {
		Objects.requireNonNull(username);
		Objects.requireNonNull(password);
		Objects.requireNonNull(category);
		System.out.println("=================HERE=============");
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new AuthenticationException("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new AuthenticationException("INVALID_CREDENTIALS", e);
		}
	}
}