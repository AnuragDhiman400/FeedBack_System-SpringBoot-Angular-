import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/admin/admin.component';
import { Review1 } from 'src/app/teacher/teacher.component';
import { API_URL } from 'app.const';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }


  getStudentList(section,category)
  {

    return this.http.get<User[]>(`${API_URL}/jpa/user/studentlist/${section}/${category}`);


  }

  getRating(username,section)
  {
    return this.http.get<Review1[]>(`${API_URL}/jpa/user/feedback/ratings/${username}/${section}`);
  }


}
