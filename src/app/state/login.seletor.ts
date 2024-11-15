import { Action, ActionReducer } from "@ngrx/store";
import { loginReducer, LoginState } from "./login.reducer";
import { LoginEffects } from "./login.effects";
export interface AppState {
    login: LoginState
  }
  
  export interface AppStore {
    login: ActionReducer<LoginState, Action>;
  }
  
  export const appStore: AppStore = {
    login: loginReducer
  }
  
  export const appEffects = [LoginEffects];