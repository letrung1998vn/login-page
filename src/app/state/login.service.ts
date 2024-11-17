import { HttpClient, HttpHeaders, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',

  })
  export class LoginService {
    constructor (private http: HttpClient) {
    }
    
    login(userName: String|null, password: String|null) : Observable<HttpResponseBase> {
      const CustomHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Access-Control-Request-Method', 'POST');
      return this.http.post<HttpResponseBase>('http://localhost:8080/auth/login', JSON.stringify({userName:userName, password:password}),{headers:CustomHeaders});
    }
  }