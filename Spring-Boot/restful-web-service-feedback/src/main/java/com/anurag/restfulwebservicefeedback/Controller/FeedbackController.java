package com.anurag.restfulwebservicefeedback.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.anurag.restfulwebservicefeedback.Bean.Review;
import com.anurag.restfulwebservicefeedback.Bean.User;
import com.anurag.restfulwebservicefeedback.Repository.ReviewRepository;
import com.anurag.restfulwebservicefeedback.Repository.UserRepository;

@RestController
public class FeedbackController {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@Autowired
	UserRepository userRepo;
	
	@GetMapping("/user/{section}/feedback")
	public List<Review> getAllFeedback(@PathVariable String section)
	{
		
		return reviewRepository.findBySection(section);
	}
	
	@GetMapping("/jpa/user/feedback/username/{section}/{category}")
	public @ResponseBody List<String> getAllusernames(@PathVariable String section, @PathVariable String category)
	{
	
		return reviewRepository.findAllUsernames(section,category);
	}
	
	@PutMapping("/user/{section}/feedback/{id}")
	public ResponseEntity<Review> update(@PathVariable String section, @PathVariable long id, @RequestBody Review review )
	{
		Review objReview = reviewRepository.save(review);
		return new ResponseEntity<Review>(review, HttpStatus.OK);
	}


	//Delete mapping
		@DeleteMapping("/user/{section}/feedback/{id}")
		public ResponseEntity<Void> deleteTodo(
				@PathVariable String section, @PathVariable long id){
			reviewRepository.deleteById(id);
			return ResponseEntity.noContent().build();
	
		}
		
}
