package com.anurag.restfulwebservicefeedback.Bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="user_rating")
@Entity
public class UserRating {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long rating_id;
	
	private String username;
	private int question1;
	private int question2;
	private int question3;
	private int question4;
	private int question5;
	
	protected UserRating() {}

	public UserRating(Long rating_id, String username, int question1, int question2, int question3, int question4,
			int question5) {
		super();
		this.rating_id = rating_id;
		this.username = username;
		this.question1 = question1;
		this.question2 = question2;
		this.question3 = question3;
		this.question4 = question4;
		this.question5 = question5;
	}

	public Long getRating_id() {
		return rating_id;
	}

	public void setRating_id(Long rating_id) {
		this.rating_id = rating_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getQuestion1() {
		return question1;
	}

	public void setQuestion1(int question1) {
		this.question1 = question1;
	}

	public int getQuestion2() {
		return question2;
	}

	public void setQuestion2(int question2) {
		this.question2 = question2;
	}

	public int getQuestion3() {
		return question3;
	}

	public void setQuestion3(int question3) {
		this.question3 = question3;
	}

	public int getQuestion4() {
		return question4;
	}

	public void setQuestion4(int question4) {
		this.question4 = question4;
	}

	public int getQuestion5() {
		return question5;
	}

	public void setQuestion5(int question5) {
		this.question5 = question5;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + question1;
		result = prime * result + question2;
		result = prime * result + question3;
		result = prime * result + question4;
		result = prime * result + question5;
		result = prime * result + ((rating_id == null) ? 0 : rating_id.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserRating other = (UserRating) obj;
		if (question1 != other.question1)
			return false;
		if (question2 != other.question2)
			return false;
		if (question3 != other.question3)
			return false;
		if (question4 != other.question4)
			return false;
		if (question5 != other.question5)
			return false;
		if (rating_id == null) {
			if (other.rating_id != null)
				return false;
		} else if (!rating_id.equals(other.rating_id))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	
	

}
