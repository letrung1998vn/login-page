import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './state/login.actions';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppState } from './state/login.seletor';
import { Observable } from 'rxjs';
import { loginModel } from './state/login.model';
import { LoginService } from './state/login.service';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports : [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})

export class AppComponent {
  title = 'login-page';
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  login$: Observable<loginModel>;
  constructor(private readonly router: Router, private store: Store<AppState>, private loginService: LoginService) {
    this.login$=this.store.select((state)=>state.login)
  }

  onSubmit() {
    // this.store.dispatch(login({ username: this.loginForm.controls.userName.value, password: this.loginForm.controls.password.value }));
    this.loginService.login(this.loginForm.controls.userName.value,this.loginForm.controls.password.value).subscribe({
      complete: () =>(this.router.navigate(['/success'],{ queryParams: { message: 'Welcome' }})),
      error: ()=>(this.router.navigate(['/fail'],{ queryParams: { message: 'Invalid' }}))}
      
    )
  }

}