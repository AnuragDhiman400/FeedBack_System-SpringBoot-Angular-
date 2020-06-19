import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';
=======
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

<<<<<<< HEAD
  constructor(private auth:AuthService,
    private route: Router) { }
=======
  constructor() { }
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


<<<<<<< HEAD
    if(this.auth.isUserLoggedIn())
    return true;
    
    this.route.navigate(["login"]);

    return false;
=======
    return true;
>>>>>>> 2ba7b30f32f462a51648b23ce8c73a757eec7246


  }


}
