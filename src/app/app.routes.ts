import { Routes } from '@angular/router';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginFailComponent } from './login-fail/login-fail.component';

export const routes: Routes = [
    { path: 'success', component: LoginSuccessComponent },
    { path: 'fail', component: LoginFailComponent }
];
