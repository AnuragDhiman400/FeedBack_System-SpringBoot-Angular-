import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Teacher } from 'src/app/student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {


  constructor(

   private http: HttpClient

  ) { }


  getTeacherList(section,category)
  {

    return this.http.get<Teacher>(`http://localhost:8080/jpa/user/teacher/${section}/${category}`);


  }

  submitReview(rating)
  {
    return this.http.post("http://localhost:8080/jpa/ratings", rating);
  }







}
