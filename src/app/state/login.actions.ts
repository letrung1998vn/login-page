import { HttpStatusCode } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login Page] Login',
  props<{ username: string | null; password: string | null }>());

  export const loginSuccess = createAction('Login Success',
    props<{ statusCode: HttpStatusCode | null; message: string | null }>());
    
  export const loginFail = createAction('Login Fail',
    props<{ statusCode: HttpStatusCode | null; message: string | null }>());