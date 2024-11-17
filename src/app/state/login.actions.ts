import { HttpErrorResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login Page] Login',
  props<{ userName: string | null; password: string | null }>());

  export const loginSuccess = createAction('Login Success',
    props<{ body: HttpResponseBase }>());
    
  export const loginFail = createAction('Login Fail',
    props<{ body: HttpErrorResponse  }>());