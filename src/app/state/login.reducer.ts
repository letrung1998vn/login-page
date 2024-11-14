import { Action, createReducer, on } from '@ngrx/store';
import { login, loginFail, loginSuccess } from './login.actions';
import { HttpStatusCode } from '@angular/common/http';

export interface State {
    message:String;
    statusCode: number;
  }

  export const initialState: State = {
    message: '',
    statusCode: 200,
  };
  export const loginReducer = createReducer(
    initialState,
    on(login, state => ({ ...state})),
    on(loginSuccess, state => ({ ...state, statusCode: HttpStatusCode.Ok, message: ''})),
    on(loginFail, state => ({ ...state, statusCode :HttpStatusCode.BadRequest})),
  );