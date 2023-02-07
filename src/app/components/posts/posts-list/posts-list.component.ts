import { deletePost, loadPost } from '../state/post.actions';
 import { map } from 'rxjs';
import { EditComponent } from '../edit/edit.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { getPosts } from '../state/post.selector';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(
    private store:Store<AppState>,
    private dialog: MatDialog,
    private router: Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.store.dispatch(loadPost())
  }

  posts$ = this.store.select(getPosts);

  displayedColumns: string[] = ['id', 'title', 'description', 'actions'];
  dataSource:any = this.posts$;

  addPost(){
   const dialgoRef = this.dialog.open(AddPostComponent,{
      width : '15%',
      height : '50%',
    });

    dialgoRef.afterClosed().subscribe(result =>{
      this.router.navigate(['posts']);
    })
  };

  editPost(id:string){
  const dialogRef = this.dialog.open(EditComponent,{
    width : '15%',
    height : '50%',
    data:{id:id}
  });

  dialogRef.afterClosed().subscribe(result =>{
    this.router.navigate(['posts']);
  })

  }

  deletePost(id:string){

    this.store.dispatch(deletePost({id:id}))

    }

}
