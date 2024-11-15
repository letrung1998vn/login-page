import { HttpStatusCode } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { loginModel } from './login.model';

export const login = createAction('[Login Page] Login',
  props<{ username: string | null; password: string | null }>());

  export const loginSuccess = createAction('Login Success',
    props<{ body: loginModel }>());
    
  export const loginFail = createAction('Login Fail',
    props<{ body: loginModel  }>());