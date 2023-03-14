import { createReducer, on } from '@ngrx/store';
import { addPost, loadPostSuccess, addPostSuccess, updatePostSuccess, deletePostSuccess } from './post.actions';
import { initialState } from './post.state';


const _postsReducer = createReducer(initialState,
  on(loadPostSuccess,(state,action) =>{
    return {
      ...state,
      posts:action.posts
    }
  }),
  on(addPostSuccess,(state,action) =>{

    let post = {...action.posts};

    return {
      ...state,
      posts: [...state.posts,post]
    }
  }),
  on(updatePostSuccess,(state,action) =>{

    const updatedPosts = state.posts.map(post =>
      action.posts.id === post.id ? action.posts: post
      );

    return {
      ...state,
      posts:updatedPosts
    }
  }),
  on(deletePostSuccess,(state,{id}) =>{

    const updatedPosts = state.posts.filter(post =>{
      return post.id !== id;
    });

    return{
      ...state,
      posts:updatedPosts
    }
  })
 )


export function postsReducer(state:any,action:any){
  return _postsReducer(state,action);
}
