import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';


// export const editPost = createAction('[Post page] editPost',props<{post:Post,id:number}>())


export const loadPost = createAction('[auth page] loadpost');
export const loadPostSuccess = createAction('[auth page] loadpost success',props<{posts:Post[]}>());

export const addPost = createAction('[Post page] addPost',props<{posts:Post}>());
export const addPostSuccess = createAction('[auth page] updatepost susccess',props<{posts:Post}>());

export const updatePost = createAction('[auth page] updatepost',props<{posts:Post,id:string}>());
export const updatePostSuccess = createAction('[auth page] updatepost susccess',props<{posts:Post,id:string}>());

export const deletePost = createAction('[auth page] deletepost',props<{id:string}>());
export const deletePostSuccess = createAction('[auth page] deletepost susccess',props<{id:string}>());

