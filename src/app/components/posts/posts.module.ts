import { PostsEffects } from './state/posts.effects';
import { EffectsModule } from '@ngrx/effects';
import { POST_STATE_NAME } from './state/post.selector';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditComponent } from './edit/edit.component';
import { postsReducer } from './state/post.reducer';

const routes:Routes = [
  {path:'',component:PostsListComponent,children:[
    {path:'add',component:AddPostComponent},
    {path:'edit/:id',component:EditComponent}
  ]}
];

@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(POST_STATE_NAME,postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
