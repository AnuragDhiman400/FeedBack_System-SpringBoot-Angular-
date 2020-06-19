package com.anurag.restfulwebservicefeedback.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.anurag.restfulwebservicefeedback.Bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//	@Query("SELECT user from user_info user WHERE user.username=?1 AND user.category!='student'")
//	public List<User_Info> findByUsername(String username, String category);
	
//	@Query("SELECT user from user_info user WHERE user.username=?1 AND user.password=?2 AND user.category=?3")
//	public List<User_Info> findByUsername(String username, String password, String category);
	
	
	
	public Optional<User> findByUsername(String username);
	public User findByPassword(String password);
	
}
