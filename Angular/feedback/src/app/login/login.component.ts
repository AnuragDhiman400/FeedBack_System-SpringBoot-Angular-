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
       // console.log(this.datasource[2].user_id);
        console.log(data.token);
      console.log('Decodeed');
      let usernameJWT = jwt_decode(data.token);
      console.log(usernameJWT);

      console.log(this.userService.getUser(usernameJWT.sub).subscribe(
        data => { this.user = data 
        console.log(this.user);
        }
      ));

  

      },
    error=>
    {
console.log(error)
console.log("errror" +this.username,this.password)
this.invalidLogin = true
    })
    
      

  }

  
  sectionVerification()
  {

    this.userService.retrieveAllList().subscribe(

      data => {this.datasource = data;
        for(var i = 0; i < this.datasource.length; i++){   
          console.log('before'+this.selectedRole+'and'+this.datasource[i].category)
         if(this.selectedRole === this.datasource[i].category)
        {
          console.log('after'+this.selectedRole+this.datasource[i].category)
          this.router.navigate(['admin']); 
        
        }
        else{
        
          sessionStorage.removeItem(AUTHENTICATED_USER);
  sessionStorage.removeItem(TOKEN);
  
        
        }
        }
    },
    error=>
    {
      console.log(error)
    }
     

    )

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
