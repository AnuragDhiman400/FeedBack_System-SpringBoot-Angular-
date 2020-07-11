import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/admin/admin.component';
import { Review1 } from 'src/app/teacher/teacher.component';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }


  getStudentList(section,category)
  {

    return this.http.get<User[]>(`http://localhost:8080/jpa/user/studentlist/${section}/${category}`);


  }

  getRating(username,section)
  {
    return this.http.get<Review1[]>(`http://localhost:8080/jpa/user/feedback/ratings/${username}/${section}`);
  }


}
