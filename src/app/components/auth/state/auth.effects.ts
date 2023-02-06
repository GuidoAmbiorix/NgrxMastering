import { setLoadingSpinner } from './../../../store/shared/shared.action';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from './../../../services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, interval, map, of } from 'rxjs';
import { Store } from '@ngrx/store';


@Injectable()
export class AuthEffects{
  constructor(private action$:Actions,private authService:AuthService,private store:Store<AppState>){}

  login$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap(action =>{
        return this.authService.login(action.email,action.password).pipe(
          map(data =>{
          this.store.dispatch(setLoadingSpinner({status:false}));
          const user = this.authService.formatUser(data)
          return loginSuccess({user:user});
          }),
          catchError((errResp) =>{
            console.log(errResp);
            return of();
          })
        )
      })
    )
  });

}
