import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/admin/admin.component';


@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(

    private http:HttpClient

  ) { }


  retrieveAllList()
{

  return this.http.get<User[]>("http://localhost:8080/jpa/users/");

}

deleteUser(user_id)
{

  return this.http.delete(`http://localhost:8080/jpa/users/${user_id}`);

}

getUser(user_id)
{

  return this.http.get<User>(`http://localhost:8080/jpa/users/${user_id}`);

}

updateUser(user_id, user)
{

  return this.http.put<User>(`http://localhost:8080/jpa/users/${user_id}`,user);

}

addNewUser(user)
{

  return this.http.post("http://localhost:8080/jpa/users/newuser", user);

}



}
