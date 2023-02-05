import { EditComponent } from './components/posts/edit/edit.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter-index/counter.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'counter',component:CounterComponent},
  {path:'posts',component:PostsListComponent,children:[
    {path:'add',component:AddPostComponent},
    {path:'edit/:id',component:EditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
