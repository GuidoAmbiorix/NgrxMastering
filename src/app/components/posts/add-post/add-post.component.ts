import { AppState } from './../../../store/app.state';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { Store } from '@ngrx/store';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent  implements OnInit{

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {}

  addPostForm = new FormGroup({
  title: new FormControl(null,[Validators.required]),
  description: new FormControl(null,[Validators.required,Validators.minLength(6)]),
  });

  onAddPost(){
  if(!this.addPostForm.valid){
    return;
  }
    const post:Post = {
      title:this.addPostForm.value.title!,
      description:this.addPostForm.value.description!
    }

    this.store.dispatch(addPost({post:post}));
  }

  showErrors(formName:string):any{
    const formControlName = this.addPostForm.get(formName);
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

