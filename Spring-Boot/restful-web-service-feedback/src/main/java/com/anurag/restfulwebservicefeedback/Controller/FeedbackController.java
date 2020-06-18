package com.anurag.restfulwebservicefeedback.Controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import com.anurag.restfulwebservicefeedback.Bean.Review;
import com.anurag.restfulwebservicefeedback.Bean.User;
import com.anurag.restfulwebservicefeedback.Bean.UserRating;
import com.anurag.restfulwebservicefeedback.Repository.RatingRepo;
import com.anurag.restfulwebservicefeedback.Repository.ReviewRepository;
import com.anurag.restfulwebservicefeedback.Repository.UserRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class FeedbackController {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@Autowired
	UserRepository userRepo;
	
	
	@Autowired
	RatingRepo ratingsRepo;
	
//	@GetMapping("/user/{section}/feedback")
//	public List<Review> getAllFeedback(@PathVariable String section)
//	{
//		
//		return reviewRepository.findBySection(section);
//	}
//	
	@GetMapping("/jpa/user/feedback/ratings/{username}/{section}")
	public List<UserRating> getAllusernames(@PathVariable String username,@PathVariable String section)
	{	
		
		return reviewRepository.findRatings(username,section);
	}
	
	
	@PutMapping("/user/{section}/feedback/{id}")
	public ResponseEntity<UserRating> update(@PathVariable String section, @PathVariable long id, @RequestBody UserRating review )
	{
		UserRating objReview = reviewRepository.save(review);
		
		return new ResponseEntity<UserRating>(review, HttpStatus.OK);
	}


	//Delete mapping
		@DeleteMapping("/user/{section}/feedback/{id}")
		public ResponseEntity<Void> deleteTodo(
				@PathVariable String section, @PathVariable long id){
			reviewRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		}
//		@PostMapping("/jpa/reviewsubmit")
//		public ResponseEntity<Void> newReview(@RequestBody Review review)
//		{
//			System.out.println("I am here");
//			Review userReview = reviewRepository.save(review);
//
//			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
//					.path("/{id}").buildAndExpand(userReview.getId()).toUri();
//			
//			return ResponseEntity.created(uri).build();
//
//		}
		
		//Rating controller
		@PostMapping("/jpa/ratings")
		public ResponseEntity<Void> newReview(@RequestBody UserRating rating)
		{
			System.out.println("I am here"+rating);
			//Review userReview = reviewRepository.save(review);
			UserRating userRate = ratingsRepo.save(rating);

			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(userRate.getRating_id()).toUri();
			
			return ResponseEntity.created(uri).build();

		}
		
}
