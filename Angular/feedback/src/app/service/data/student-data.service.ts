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


  getTeacherList()
  {

    return this.http.get<Teacher>("http://localhost:8080/jpa/users/userlist/anurag");


  }






}
