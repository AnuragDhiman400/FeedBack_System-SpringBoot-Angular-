package com.anurag.restfulwebservicefeedback.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;

import com.anurag.restfulwebservicefeedback.Repository.UserRepository;
import com.anurag.restfulwebservicefeedback.Bean.User;;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserRepository userRepo;
	

	
	@GetMapping("/secured/login")
	public String login()
	{
		return "login done using DB";
	}
	
	
	@GetMapping("/jpa/users/anurag")
	public List<User> getUser()
	{
		
		return userRepo.findAll();
		
	}
	
	@GetMapping("/jpa/users/")
	public List<User> getAllUsers()
	{
		
		return userRepo.findAll();
		
	}
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new AuthenticationBean("You are authenticated");
	}	
	
	
	@GetMapping("/jpa/users/{id}")
	public User getUser(@PathVariable long id)
	{
		
		return userRepo.findById(id).get();
		
	}
	
	
	@DeleteMapping("/jpa/users/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable long id)
	{
		userRepo.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("jpa/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User user)
	{
		   User userUpdated =  userRepo.save(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PostMapping("jpa/users/newuser")
	public ResponseEntity<Void> newUser(@RequestBody User user)
	{
		
		User updatedUser = userRepo.save(user);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(updatedUser.getUser_id()).toUri();
		
		return ResponseEntity.created(uri).build();

	}
	
	
	//For student dasboard
	

//	@GetMapping("/jpa/users/{username}/{category}")
//	public List<User_Info> getByUsername(@PathVariable String username, @PathVariable String category)
//	{
//		
//		return userRepo.findByUsername(username, category);
//		
//	}
	
	
	
}






