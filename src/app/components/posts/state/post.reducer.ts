import { createReducer } from '@ngrx/store';
import { initialState } from './post.state';

export const _postsReducer = createReducer(initialState,);


export function  postsReducer(state:any,action:any){
  return _postsReducer(state,action);
}
