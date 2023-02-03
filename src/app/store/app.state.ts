import { postsState } from "../components/posts/state/post.state";
import { postsReducer } from "../components/posts/state/post.reducer";
import { CounterState } from "../components/state/counter.actions";
import { counterReducer } from "../components/state/counter.reducer";

export interface AppState{
  counter:CounterState,
  posts:postsState
}


export const appReducer = {
  counter:counterReducer,
  posts:postsReducer
}
