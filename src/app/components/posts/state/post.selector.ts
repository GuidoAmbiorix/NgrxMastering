import { createSelector } from '@ngrx/store';

import { createFeatureSelector } from '@ngrx/store';
import { postsState } from './post.state';


const getPostsState = createFeatureSelector<postsState>('posts');

export const getPosts = createSelector(getPostsState,state =>{
  return state.posts;
});


