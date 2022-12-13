import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // api_url: string = 'http://localhost:8000/';
  constructor(private http:HttpClient) { }
  getAuthToken() {
    return localStorage.getItem('token')
    }
  
  register(val:any){
    return this.http.post( 'accounts/register/',val);
  }

  login(username: string, password: string){
    return this.http.post<any>( `accounts/api/auth/`,
     { username, password}, httpOptions).pipe(
       map(user =>{
        if(user && user.token){
           localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
       })
       );
  }
  logout(){
    localStorage.removeItem('currentUser');
  }

  // getAuthToken(token:string):string {
  //   return localStorage.getItem('user.token')
  //   }
}
// private saveAuthData(token: string, expirationDate: Date) {  
//   localStorage.setItem('token', token);  
// }  