import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    constructor (private http: HttpClient) {}
  
    login(userName: String, password: String) {
      return this.http.post('/login', {userName, password});
    }
  }