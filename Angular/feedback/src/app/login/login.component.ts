import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';

interface Role {
  value: string;
  viewValue: string;
}


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

  roles: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'student', viewValue: 'Student'},
    {value: 'teacher', viewValue: 'Teacher'}
  ];


  constructor(
    private router: Router,
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

      data=> {
        console.log(data)
        console.log(this.username,this.password)
        this.router.navigate(['admin']);

        this.invalidLogin = false
      },
    error=>
    {
console.log(error)
console.log("errro" +this.username,this.password)
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
