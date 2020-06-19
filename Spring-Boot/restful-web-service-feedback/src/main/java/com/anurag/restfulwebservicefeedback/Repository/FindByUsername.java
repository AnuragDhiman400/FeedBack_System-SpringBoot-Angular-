//package com.anurag.restfulwebservicefeedback.Repository;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//
//import com.anurag.restfulwebservicefeedback.Bean.User;
//
//public interface FindByUsername extends CrudRepository<User, Long> {
//		
//	 @Query(value = "SELECT * FROM USER", nativeQuery = true)
//	List<User> findByUsername(String username);
//
//}
