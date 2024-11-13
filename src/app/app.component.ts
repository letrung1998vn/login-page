import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'login-page';
  loginForm = new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
  });
  
  constructor(private readonly router: Router){}
  onSubmit(){
    if(this.loginForm.controls.userName.value==='aaaa'){
      this.router.navigate(['success'])
    } else{
      this.router.navigate(['fail'])
    }
  }
  
}