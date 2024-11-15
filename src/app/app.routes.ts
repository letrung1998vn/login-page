import { Routes } from '@angular/router';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginFailComponent } from './login-fail/login-fail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'login', component: LoginSuccessComponent },
    { path: 'success', component: LoginSuccessComponent },
    { path: 'fail', component: LoginFailComponent }
];
