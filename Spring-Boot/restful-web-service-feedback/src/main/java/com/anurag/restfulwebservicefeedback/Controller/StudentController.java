package com.anurag.restfulwebservicefeedback.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.anurag.restfulwebservicefeedback.Bean.Review;
import com.anurag.restfulwebservicefeedback.Bean.User;
import com.anurag.restfulwebservicefeedback.Repository.ReviewRepository;
import com.anurag.restfulwebservicefeedback.Repository.UserRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentController {
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	ReviewRepository reviewRepository;
	
	@GetMapping("/jpa/user/teacherlist/{section}/{category}")
	public List<User> getTeacherList(@PathVariable String section, @PathVariable String category)
	{
		
		return userRepo.findBySectionForTeacher(section, category);
	}
	
	@GetMapping("/jpa/user/teacher/{section}/{category}")
	public List<User> getAllFeedback(@PathVariable String section, @PathVariable String category)
	{
		
		return userRepo.findBySectionForTeacher(section, category);
	}
	
 
	
//	@PostMapping("/jpa/student/feedback")
//	public ResponseEntity<Void> newUser(@RequestBody Review review)
//	{
//		
//		Review updatedUser = reviewRepository.save(review);
//
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
//				.path("/{id}").buildAndExpand(updatedUser.getId()).toUri();
//		
//		return ResponseEntity.created(uri).build();
//
//	}
	       
 
}
