import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './state/login.actions';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'login-page';
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private readonly router: Router, private store: Store<{}>) {
  }

  onSubmit() {
    this.store.dispatch(login({ username: this.loginForm.controls.userName.value, password: this.loginForm.controls.password.value }));
  }

}