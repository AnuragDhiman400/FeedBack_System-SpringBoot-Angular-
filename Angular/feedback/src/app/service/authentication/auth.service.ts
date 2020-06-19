import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

export const AUTHENTICATED_USER='authenticateUser'
export const TOKEN='token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  

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

    if(role==='admin' && username === 'anurag' && password === '123' && email==='a@gmail.com')
    {

      console.log('user logged in');

      sessionStorage.setItem(AUTHENTICATED_USER,username);
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
    return!(user === null);
  }


  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }


}

export class AuthenticationBean{
  constructor(public message:string ){}
  
  
  }
