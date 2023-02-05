import { postsReducer } from "../components/posts/state/post.reducer";
import { postsState } from "../components/posts/state/post.state";

import { CounterState } from "../components/counter-index/state/counter.actions";
import { counterReducer } from "../components/counter-index/state/counter.reducer";

export interface AppState{
  counter:CounterState,
  posts:postsState
}


export const appReducer = {
  counter:counterReducer,
  posts:postsReducer
}
