import { createReducer, on } from '@ngrx/store';
import { login, loginFail, loginSuccess } from './login.actions';
import { HttpStatusCode } from '@angular/common/http';

export interface LoginState {
    userName: String|null,
    password: String|null,
    message:String|null;
    statusCode: HttpStatusCode|null;
  }

  export const initialState: LoginState = {
    userName:'',
    password:'',
    message: '',
    statusCode: HttpStatusCode.Ok,
  };
  export const loginReducer = createReducer(
    initialState,
    on(login, (state,{username, password}) => ({ ...state, userName:username, password:password})),
    on(loginSuccess, (state,{body }) => ({ ...state, body: (state.statusCode,state.message )})),
    on(loginFail, (state,{body }) => ({ ...state, body: (state.statusCode,state.message )})),
  );