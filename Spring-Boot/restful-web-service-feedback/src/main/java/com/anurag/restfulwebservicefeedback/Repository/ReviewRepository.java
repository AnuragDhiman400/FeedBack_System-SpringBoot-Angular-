package com.anurag.restfulwebservicefeedback.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.anurag.restfulwebservicefeedback.Bean.UserRating;

public interface ReviewRepository extends JpaRepository<UserRating, Long> {
	
//	List<Review> findBySection(String section);
	
//	@Query("select u.username from User u where u.section=?1 and u.category='teacher'")
//	List<String> findAllUsernames(String section, String category);
//	
	@Query("select r from UserRating r where r.username=?1 and r.section=?2")
	List<UserRating> findRatings(String username, String section);
	


	
}
