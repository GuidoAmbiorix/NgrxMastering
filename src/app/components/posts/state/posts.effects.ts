import { map, mergeMap, switchMap } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { PostsService } from './../services/components/posts.service';
import { Injectable } from '@angular/core';
import { loadPost, loadPostSuccess, addPost, addPostSuccess, updatePost, updatePostSuccess, deletePost, deletePostSuccess } from './post.actions';



@Injectable()
export class PostsEffects{
  constructor(private action$:Actions,private postsService:PostsService){}

  loadPost$ = createEffect(():any =>{
  return this.action$.pipe(
    ofType(loadPost),
    mergeMap((action) =>{
    return this.postsService.getPosts().pipe(
      map((data) =>{
      return loadPostSuccess({posts:data})
      })
    )
    })
  )
  });

  addPost$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(addPost),
      mergeMap((action:any) =>{
        return this.postsService.addPost(action.posts).pipe(
          map(data =>{
            const post = {...action.posts, id: data.name};
            return addPostSuccess({posts:post})
          })
        )
      })
    )
  });

  updatePost$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(updatePost),
      switchMap((action:any) =>{
        return this.postsService.editPost(action.posts).pipe(
        map(data =>{
          return updatePostSuccess({posts:action.posts,id:action.id})
        })
        );
      })
    )
  });

  deletePost$ = createEffect(():any =>{
  return this.action$.pipe(
    ofType(deletePost),
    switchMap((action:any)=>{
    return this.postsService.deletePost(action.id).pipe(
      map(data =>{
        return deletePostSuccess({id:action.id});
      })
    )
    })
  )
  });

}
