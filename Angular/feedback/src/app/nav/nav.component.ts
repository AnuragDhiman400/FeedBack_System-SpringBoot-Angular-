import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../service/authentication/auth.service';
=======
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
<<<<<<< HEAD
    public auth:AuthService,
    private router: Router
  ) { }

  isUserLoggedin: boolean = false;

  ngOnInit(): void {
    console.log('before'+this.auth.isUserLoggedIn());
    this.isUserLoggedin = this.auth.isUserLoggedIn();
=======
    private router: Router
  ) { }

  ngOnInit(): void {
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246
  }


}
