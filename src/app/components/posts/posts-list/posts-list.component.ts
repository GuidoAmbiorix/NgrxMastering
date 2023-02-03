import { AddPostComponent } from './../add-post/add-post.component';
import { getPosts } from './../state/post.selector';
import { AppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private store:Store<AppState>,private dialog: MatDialog){}

  ngOnInit(): void {}

  posts$ = this.store.select(getPosts)

  displayedColumns: string[] = ['id', 'title', 'description'];
  dataSource:any = this.posts$;

  addPost(){
    this.dialog.open(AddPostComponent,{
      width : '15%',
      height : '50%'
    })
  }

}
