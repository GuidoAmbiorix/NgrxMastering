import { Post } from "src/app/interfaces/post";

export interface postsState{
  posts:Post[];
}

export const initialState:postsState = {
  posts:[
    {id:'1',title:'Sample title 1',description:'Sample description 1'},
    {id:'2',title:'Sample title 2',description:'Sample description 2'}
  ]
}
