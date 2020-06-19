import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';
import { User } from '../admin/admin.component';
import { AdminDataService } from '../service/data/admin-data.service';
import * as jwt_decode from "jwt-decode";

interface Role {
  value: string;
  viewValue: string;
}

export const AUTHENTICATED_USER='authenticateUser'
export const TOKEN='token'
export class SelectOverviewExample {

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;
  selectedCar: string;
  selectedRole: string = ''
  username: string=''
  password: string=''
  email: string=''
  invalidLogin = false
  errorMessage = 'Invalid User'
  datasource : User[]
  user: User
  user_id: number

  roles: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'student', viewValue: 'Student'},
    {value: 'teacher', viewValue: 'Teacher'}
  ];


  constructor(
    private router: Router,
    private userService:AdminDataService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }


  // isHomeRoute() {

  //   if (this.router.url === '/')

  //     return false;


  //   return true;


  // }

  basicAuth()
  {
    console.log('works');

    this.auth.JWTAuth(this.username, this.password)
    .subscribe(
      

      data=> {this.datasource = data
        console.log(this.username,this.password)
       
        console.log(data.token);
      console.log('Decodeed');
      let usernameJWT = jwt_decode(data.token);
      console.log(usernameJWT);

     this.userService.getUserByusername(usernameJWT.sub).subscribe(
        data => { this.user = data 
        console.log(this.user);

        if(this.user.category === 'admin')
        {
          this.router.navigate(['admin']); 
        }
        else if(this.user.category === 'student')
        {
          this.router.navigate(['student']); 
        }
        else if(this.user.category === 'teacher')
        {
          this.router.navigate(['teacher']); 
        }
        else{
          sessionStorage.removeItem(AUTHENTICATED_USER);
          sessionStorage.removeItem(TOKEN);
        }

        }
      );

  

      },
    error=>
    {
console.log(error)
console.log("errror" +this.username,this.password)
this.invalidLogin = true
    })
    
      

  }



  authentication()
  {
    console.log('works');
    console.log(this.selectedRole);
    if(this.auth.authenticate(this.selectedRole, this.username, this.password, this.email))
    {
      this.router.navigate(['admin']);
    }


else
{
  this. invalidLogin = true
}

  }
 




}
