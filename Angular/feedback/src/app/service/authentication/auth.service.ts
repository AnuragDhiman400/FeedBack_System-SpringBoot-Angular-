import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from 'app.const';
import { AdminDataService } from '../data/admin-data.service';
import { User } from 'src/app/admin/admin.component';
import { Router } from '@angular/router';

export const AUTHENTICATED_USER='authenticateUser'
export const TOKEN='token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  datasource : User[]
 inValid:boolean

  constructor(private http:HttpClient,
    private router: Router,
    private userService:AdminDataService) { }


  JWTAuth(username, password)
  {
   
  
    return this.http.post<any>(
    `${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
  
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;
        }
      )
  
    );
   
    //console.log("Execute the Hello world Bean service")
  }



  authenticateBasicAuth(username,password)
  {
    let basicAuthHeaderString= 'Basic ' + window.btoa(username + ':' + password);

    let credentials = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

   // const  credentials = new  HttpHeaders().set("username", "money");
    return this.http.get<AuthenticationBean>(
      "http://localhost:8080/basicauth",
      {headers:credentials})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
           // sessionStorage.setItem(TOKEN,basicAuthHeaderString);
            return data;
          }));
  }

  authenticate(role,username, password,email)
  {

    console.log('before'+this.isUserLoggedIn());
    if(role==='admin' && username === 'anurag' && password === '123' && email==='a@gmail.com')
    {

      
      console.log('user logged in');
      sessionStorage.setItem(AUTHENTICATED_USER,username);
      console.log('after'+this.isUserLoggedIn());
      return true;

    }

    return false;

  }


  getAuthenticatedUser()
  {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }


  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  sessionStorage.removeItem(TOKEN);
  }


}

export class AuthenticationBean{
  constructor(public message:string ){}
  
  
  }
