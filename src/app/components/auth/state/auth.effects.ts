import { AuthService } from './../../../services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from 'rxjs';


@Injectable()
export class AuthEffects{
  constructor(private action$:Actions,private authService:AuthService){}

  login$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap(action =>{
        return this.authService.login(action.email,action.password).pipe(
          map(data =>{
          const user = this.authService.formatUser(data)
          return loginSuccess({user:user});
          })
        )
      })
    )
  });

}
