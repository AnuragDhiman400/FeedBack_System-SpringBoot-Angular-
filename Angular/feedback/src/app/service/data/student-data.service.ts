import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Teacher } from 'src/app/student/student.component';
import { API_URL } from 'app.const';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {


  constructor(

   private http: HttpClient

  ) { }


  getTeacherList(section,category)
  {

    return this.http.get<Teacher>(`${API_URL}/jpa/user/teacher/${section}/${category}`);


  }

  submitReview(rating)
  {
    return this.http.post(`${API_URL}/jpa/ratings`, rating);
  }







}
