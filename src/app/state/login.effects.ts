import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "./login.service";
import { catchError, EMPTY, map, switchMap } from "rxjs";
import { login, loginSuccess } from "./login.actions";

@Injectable()
export class LoginEffects {
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login), 
        switchMap((actions:any) => this.loginService.login(actions.userName, actions.password)
        .pipe(
            map(login => ({ type: 'Login Success', payload: loginSuccess })),
            catchError(()=>EMPTY)
        ))
    )
);

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) { }
}

