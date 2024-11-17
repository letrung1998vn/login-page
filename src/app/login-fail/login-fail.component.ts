import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-fail',
  standalone: true,
  imports: [],
  templateUrl: './login-fail.component.html',
  styleUrl: './login-fail.component.css'
})
export class LoginFailComponent {
  message: String|null ='';
  
  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.message = params['message'];
    });
  };
  
}