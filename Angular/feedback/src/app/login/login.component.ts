import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';
<<<<<<< HEAD
import { User } from '../admin/admin.component';
import { AdminDataService } from '../service/data/admin-data.service';
import * as jwt_decode from "jwt-decode";
=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246

interface Role {
  value: string;
  viewValue: string;
}


<<<<<<< HEAD
export const AUTHENTICATED_USER='authenticateUser'
export const TOKEN='token'
=======

>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
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
<<<<<<< HEAD
  datasource : User[]
  user: User
  user_id: number
=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246

  roles: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'student', viewValue: 'Student'},
    {value: 'teacher', viewValue: 'Teacher'}
  ];


  constructor(
    private router: Router,
<<<<<<< HEAD
    private userService:AdminDataService,
=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }


<<<<<<< HEAD
  // isHomeRoute() {

  //   if (this.router.url === '/')

  //     return false;


  //   return true;


  // }
=======
  isHomeRoute() {

    if (this.router.url === '/')

      return false;


    return true;


  }
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246

  basicAuth()
  {
    console.log('works');

<<<<<<< HEAD
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

  

=======
    this.auth.authenticateBasicAuth(this.username, this.password)
    .subscribe(

      data=> {
        console.log(data)
        console.log(this.username,this.password)
        this.router.navigate(['admin']);

        this.invalidLogin = false
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
      },
    error=>
    {
console.log(error)
<<<<<<< HEAD
console.log("errror" +this.username,this.password)
=======
console.log("errro" +this.username,this.password)
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
this.invalidLogin = true
    })
    
      

  }

<<<<<<< HEAD


=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
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
