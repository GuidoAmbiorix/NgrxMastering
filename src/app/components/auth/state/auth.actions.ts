import { createAction, props } from '@ngrx/store';


export const loginStart = createAction(
'[auth page] login start'
,props<{email:string;password:string}>()
);

export const loginSuccess = createAction('[auth page] login success');

export const loginFail = createAction('[auth page] login fail');
