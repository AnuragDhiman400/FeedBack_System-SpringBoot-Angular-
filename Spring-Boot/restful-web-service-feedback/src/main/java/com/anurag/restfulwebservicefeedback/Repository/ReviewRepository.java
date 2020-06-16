package com.anurag.restfulwebservicefeedback.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.anurag.restfulwebservicefeedback.Bean.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	List<Review> findBySection(String section);

	
}
