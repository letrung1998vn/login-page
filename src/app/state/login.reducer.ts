import { createReducer, on } from '@ngrx/store';
import { login, loginFail, loginSuccess } from './login.actions';
import { HttpResponse, HttpResponseBase } from '@angular/common/http';

export interface LoginState {
    userName: String|null,
    password: String|null,
    response: HttpResponseBase
  }

  export const initialState: LoginState = {
    userName:'',
    password:'',
    response: new HttpResponse
  };
  export const loginReducer = createReducer(
    initialState,
    on(login, (state,{userName, password}) => ({ ...state, userName:userName, password:password})),
    on(loginSuccess, (state,{body }) =>  ({ ...state, body:body })),
    on(loginFail, (state,{body }) => ({ ...state, body: body})),
  );