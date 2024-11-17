import { HttpClient, HttpHeaders, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',

  })
  export class LoginService {
    constructor (private http: HttpClient) {
    }
    
    login(userName: String|null, password: String|null) {
      const CustomHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Access-Control-Request-Method', 'POST');
      return this.http.post('http://localhost:8080/auth/login', JSON.stringify({userName:userName, password:password}),{headers:CustomHeaders, responseType:'text'});
    }
  }