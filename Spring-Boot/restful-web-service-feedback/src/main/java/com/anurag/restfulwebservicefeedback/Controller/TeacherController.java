package com.anurag.restfulwebservicefeedback.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.anurag.restfulwebservicefeedback.Bean.User;
import com.anurag.restfulwebservicefeedback.Repository.UserRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TeacherController {
	
	//Autowired userRepo
	@Autowired
	UserRepository userRepo;
	
	@GetMapping("/jpa/user/studentlist/{section}/{category}")
	public List<User> getStudentList(@PathVariable String section, @PathVariable String category)
	{
		
		return userRepo.findBySectionForTeacher(section, category);
	}

}
