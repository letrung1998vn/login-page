import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { loginModel } from "./login.model";

@Injectable({
    providedIn: 'root',

  })
  export class LoginService {
    constructor (private http: HttpClient) {
    }
    
    login(userName: String|null, password: String|null) : Observable<loginModel> {
      const CustomHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Access-Control-Request-Method', 'POST');
      return this.http.post<loginModel>('http://localhost:8080/auth/login', JSON.stringify({userName, password}),{headers:CustomHeaders});
    }
  }