import { createSelector } from '@ngrx/store';

import { createFeatureSelector } from '@ngrx/store';
import { postsState } from './post.state';


export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<postsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState,state =>{
  return state.posts;
});


