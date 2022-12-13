import { Injectable ,Injector} from '@angular/core';
import { AuthService } from './services/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private injector:Injector) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let authService=this.injector.get(AuthService)
    // const token=this.authService.getAuthToken();
//     var accessTokenObj = JSON.parse(localStorage.getItem("Token:"));
// console.log(accessTokenObj);
    // var token = localStorage.getItem('token');
    console.log(authService)
    // let token=localStorage.getItem('tokenName')
    let commonUrl='http://localhost:8000/'
    console.log({request})
    // if(token){
      let newRequest=request.clone({
        setHeaders: {Authorization: `Authorization token ${authService.getAuthToken()}`},
        url:commonUrl+request.url
      })
      return next.handle(newRequest);
    // }
    
  }
}
