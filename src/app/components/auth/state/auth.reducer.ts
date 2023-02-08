import { loginSuccess, signupSuccess, logoutStart } from './auth.actions';

import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';


const _authReducer = createReducer(initialState,
  on(loginSuccess,(state,action) =>{
  return {
    ...state,
    user:action.user
  }
}),
on(signupSuccess,(state,action) =>{
  return{
    ...state,
    user:action.user
  }
}),
on(logoutStart,(state) =>{
  return{
    ...state,
    user:state.user
  }
})

);


export function AuthReducer(state:any,action:any){
  return _authReducer(state,action);
}
