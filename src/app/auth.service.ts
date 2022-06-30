import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// base url for login
const loginUrl = "http://127.0.0.1:8000/api/login"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  isLoggedIn: any;


  constructor(
    private http: HttpClient
  ) { }

  login(email:string , password: string){

    // handle login with token 
    return this.http.post(loginUrl, {email, password}, httpOptions)
    .pipe(
      map(
        (data:any) => {
          console.log(data);
          if(data.token){
            localStorage.setItem('token', data.token);
            return true;
          }
          return false;
        }
      )
    );

  }

  logout(){
    localStorage.removeItem('token');
  }

}
