import { AuthState } from './../components/auth/state/auth.state';
import { SharedState } from './shared/shared.state';
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedReducer } from './shared/shared.reducer';
import { AUTH_STATE_NAME } from '../components/auth/state/auth.selector';
import { AuthReducer } from '../components/auth/state/auth.reducer';

export interface AppState{
[SHARED_STATE_NAME]:SharedState;
[AUTH_STATE_NAME]:AuthState
}


export const appReducer = {
  [SHARED_STATE_NAME]:SharedReducer,
  [AUTH_STATE_NAME]:AuthReducer
}
