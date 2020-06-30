package com.anurag.restfulwebservicefeedback.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anurag.restfulwebservicefeedback.Bean.UserRating;

public interface RatingRepo extends JpaRepository<UserRating, Long> {

}
