import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "./login.service";
import { catchError, map, switchMap, tap, throwError } from "rxjs";
import { Router } from "@angular/router";
import { HttpErrorResponse, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { login, loginFail, loginSuccess } from "./login.actions";

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private loginService: LoginService, private router: Router) { 
        createEffect(() => this.actions$.pipe(
            ofType(login), tap((login)=>this.router.navigate(['/success'],{ queryParams: { message: 'Welcome '+login.userName }})),
            switchMap((actions:any) => this.loginService.login(actions.userName, actions.password)
            .pipe(
                map((login: HttpResponseBase) => loginSuccess({body:login})),
                catchError((error: HttpErrorResponse)=>{return throwError(()=> this.router.navigate(['/fail'],{ queryParams: { message: error.error }}))})
            ))
            )
        ).subscribe()
    }  
    

}

