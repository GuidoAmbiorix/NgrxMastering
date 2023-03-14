import { Router } from '@angular/router';
import { setLoadingSpinner, setErrorMessage } from './../../../store/shared/shared.action';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from '../services/auth.service';
import { loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';


@Injectable()
export class AuthEffects{
  constructor(
    private action$:Actions,
    private authService:AuthService,
    private store:Store<AppState>,
    private router:Router
    ){}

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
            this.store.dispatch(setLoadingSpinner({status:false}));
            // const errorMessage:string = this.authService.getErrorMessage(errResp.error.error.message);
            // return of(setErrorMessage({error:errorMessage}));
            return of();
          })
        )
      })
    )
  });

  singUp$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap(action =>{
        return this.authService.singUp(action.email,action.password).pipe(
          map(data =>{
          this.store.dispatch(setLoadingSpinner({status:false}));
          const user = this.authService.formatUser(data)
          return signupSuccess({user:user});
          }),
          catchError((errResp) =>{
            this.store.dispatch(setLoadingSpinner({status:false}));
            // const errorMessage:string = this.authService.getErrorMessage(errResp.error.error.message);
            // return of(setErrorMessage({error:errorMessage}));
            return of();
          })
        )
      })
    )
  });

  loginRedirect$ = createEffect(() =>{
    return this.action$.pipe(ofType(loginSuccess,signupSuccess),tap(action =>{
      // this.store.dispatch(setErrorMessage({error:''}));
      this.router.navigate(['/']);
    }))
  },{dispatch:false});


}
