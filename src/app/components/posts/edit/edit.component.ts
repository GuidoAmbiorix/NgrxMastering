import { updatePost } from './../state/post.actions';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  post!:Post;
  id:any;
  constructor(private store:Store<AppState> ,@Inject(MAT_DIALOG_DATA) data:any){
    this.id = data.id;
  }

  ngOnInit(): void {

  }

  EditPostForm = new FormGroup({
  title: new FormControl(null,[Validators.required]),
  description: new FormControl(null,[Validators.required,Validators.minLength(6)]),
  });

  onEditPost(){
  if(!this.EditPostForm.valid){
    return;
  }
    const post:Post = {
      id:this.id,
      title:this.EditPostForm.value.title!,
      description:this.EditPostForm.value.description!
    }

    this.store.dispatch(updatePost({posts:post,id:this.id}));

  }

  showErrors(formName:string):any{
    const formControlName = this.EditPostForm.get(formName);
    if(!formControlName!.valid){
      if(formControlName!.errors!['required']){
        return formName + ' is required'
      }
      if(formControlName!.errors!['minlength']){
       return formName +' should be of minimun '+ formControlName!.errors!['minlength'].requiredLength + ' characters length';
      }
    }
  }

}
