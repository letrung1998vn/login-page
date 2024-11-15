import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "./login.service";
import { catchError, EMPTY, exhaustMap, map, mergeMap, switchMap, tap } from "rxjs";
import { login, loginSuccess } from "./login.actions";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private loginService: LoginService, private router: Router) {   
    }  
     login$=createEffect(() => this.actions$.pipe(
        ofType(login), tap((action)=>this.router.navigate(['/success'])),
        mergeMap((actions:any) => this.loginService.login(actions.userName, actions.password)
        .pipe(
            map((login) => loginSuccess({body:login})),
            catchError(()=>EMPTY)
        ))
    )
);

}

