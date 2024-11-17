import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './state/login.actions';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppState } from './state/login.seletor';
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
  constructor(private store: Store<AppState>) {
  }

  onSubmit() {
    // this.router.navigate(['/success'],{ queryParams: { message: 'Welcome' }})
    this.store.dispatch(login({ userName: this.loginForm.controls.userName.value, password: this.loginForm.controls.password.value }));
  }

}