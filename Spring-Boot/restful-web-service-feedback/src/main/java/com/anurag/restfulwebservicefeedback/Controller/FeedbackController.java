package com.anurag.restfulwebservicefeedback.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.anurag.restfulwebservicefeedback.Bean.Review;
import com.anurag.restfulwebservicefeedback.Repository.ReviewRepository;

@RestController
public class FeedbackController {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@GetMapping("/user/{section}/feedback")
	public List<Review> getAllFeedback(@PathVariable String section)
	{
		
		return reviewRepository.findBySection(section);
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
