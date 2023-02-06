import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';

export const addPost = createAction('[Post page] addPost',props<{post:Post}>());

export const editPost = createAction('[Post page] editPost',props<{post:Post,id:number}>())
