import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(
    private auth:AuthService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let HeaderString = this.auth.getAuthenticatedToken();
    let username = this.auth.getAuthenticatedUser();

    if(HeaderString && username)
    {
      request = request.clone({
        setHeaders : {
          Authorization : HeaderString
        }
      })
    }

    return next.handle(request);
  }
}
