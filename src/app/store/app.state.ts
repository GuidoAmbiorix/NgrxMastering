import { postsReducer } from "../components/posts/state/post.reducer";
import { postsState } from "../components/posts/state/post.state";

import { CounterState } from "../components/counter/state/counter.actions";
import { counterReducer } from "../components/counter/state/counter.reducer";
import { AuthState } from "../components/auth/state/auth.state";
import { AuthReducer } from "../components/auth/state/auth.reducer";

export interface AppState{
  counter:CounterState,
  posts:postsState,
  auth:AuthState
}


export const appReducer = {
  counter:counterReducer,
  posts:postsReducer,
  auth:AuthReducer
}
