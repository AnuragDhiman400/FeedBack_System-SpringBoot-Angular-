import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth:AuthService,
    private route: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if(this.auth.isUserLoggedIn())
    return true;
    
    this.route.navigate(["login"]);

    return false;


  }


}
