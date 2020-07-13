import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public auth:AuthService,
    private router: Router
  ) { }

  isUserLoggedin: boolean = false;

  ngOnInit(): void {
    console.log('before'+this.auth.isUserLoggedIn());
    this.isUserLoggedin = this.auth.isUserLoggedIn();
  }


}
