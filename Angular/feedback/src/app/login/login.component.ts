import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';
import { User } from '../admin/admin.component';
import { AdminDataService } from '../service/data/admin-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  durationInSeconds = 5;
  roles: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'student', viewValue: 'Student'},
    {value: 'teacher', viewValue: 'Teacher'}
  ];


  constructor(
    private router: Router,
    private userService:AdminDataService,
    private auth:AuthService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string,) {
    this._snackBar.open(message,action,{duration: 2000,});
  }

  basicAuth()
  {
    console.log('works');
    console.log(this.username,this.password, this.selectedRole);

    this.auth.JWTAuth(this.username, this.password, this.selectedRole)
    .subscribe(
      

      data=> {this.datasource = data
        console.log('This is handle list',data);
        

       if(data.UserData.category === 'teacher')
        {
          
          this.teacherSideList(data.UserData.section, data.UserData.category, data.UserData.username);
          
         //this.ratingList(data.UserData.username);
       }
        else if(data.UserData.category === 'student')
        {
         this.studentSideList(data.UserData.section, data.UserData.category);
         
        }

      },
    error=>
    {
console.log(error)
console.log("errror" +this.username,this.password)
this.invalidLogin = true
    })
    
      

  }

  ratingList(username)
  {
    this.router.navigate(['chart', username]);
  }

  teacherSideList(section,category, username)
  {
    console.log(section,category);
    this.router.navigate(['teacher',section,category,username]);
    this.openSnackBar('Welcome: '+this.username,'');

  }

  studentSideList(section,category)
  {
    console.log(section,category);
    this.router.navigate(['student',section,category]);
    this.openSnackBar('Welcome: '+this.username,'');

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
