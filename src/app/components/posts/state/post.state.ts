import { Post } from "src/app/interfaces/post";

export interface postsState{
  posts:Post[];
}

export const initialState:postsState = {
  posts:[]
}
