import { initialState } from './../../posts/state/post.state';
import { createReducer } from '@ngrx/store';


const _authReducer = createReducer(initialState,);


export function AuthReducer(state:any,action:any){
  return _authReducer(state,action);
}
