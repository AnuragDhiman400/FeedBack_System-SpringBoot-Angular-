package com.anurag.restfulwebservicefeedback.Bean;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private int user_id;
	private String review;
	private String ratings;

	private String section;

	protected Review() {
	}


	
	public Review(Long id, int user_id, String review, String ratings, String section) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.review = review;
		this.ratings = ratings;
		this.section = section;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getRatings() {
		return ratings;
	}

	public void setRatings(String ratings) {
		this.ratings = ratings;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}


}
