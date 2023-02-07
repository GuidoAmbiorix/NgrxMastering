import { User } from './../../../interfaces/user';
import { createAction, props } from '@ngrx/store';


export const loginStart = createAction(
'[auth page] login start'
,props<{email:string;password:string}>()
);
export const loginSuccess = createAction('[auth page] login success',props<{user:User}>());


export const signupStart = createAction(
  '[auth page] signup start',
  props<{email:string,password:string}>()
  );
export const signupSuccess = createAction('[auth page] signup start',props<{user:User}>());



