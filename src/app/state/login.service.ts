import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { loginModel } from "./login.model";

@Injectable({
    providedIn: 'root',

  })
  export class LoginService {
    constructor (private http: HttpClient) {}
  
    login(userName: String, password: String) : Observable<loginModel> {
      return this.http.post<loginModel>('/login', {userName, password});
    }
  }