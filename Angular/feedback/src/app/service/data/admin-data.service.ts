import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/admin/admin.component';
import { API_URL } from 'app.const';


@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(

    private http:HttpClient

  ) { }


  retrieveAllList()
{

  return this.http.get<User[]>(`${API_URL}/jpa/users/`);

}

deleteUser(user_id)
{

  return this.http.delete(`${API_URL}/jpa/users/${user_id}`);

}

//Get user by user_id
getUser(user_id)
{

  return this.http.get<User>(`${API_URL}/jpa/users/${user_id}`);

}

//Get user by username
getUserByusername(username)
{

  return this.http.get<User>(`${API_URL}/jpa/user/${username}`);

}

updateUser(user_id, user)
{

  return this.http.put<User>(`${API_URL}/jpa/users/${user_id}`,user);

}

addNewUser(user)
{

  return this.http.post(`${API_URL}/jpa/users/newuser`, user);

}



}
