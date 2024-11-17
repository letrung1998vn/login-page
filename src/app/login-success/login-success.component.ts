import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [],
  templateUrl: './login-success.component.html',
  styleUrl: './login-success.component.css'
})
export class LoginSuccessComponent {
  message: String|null ='';
  
  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.message = params['message'];
    });
  };
}
