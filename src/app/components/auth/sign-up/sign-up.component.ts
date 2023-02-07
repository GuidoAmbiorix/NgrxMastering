import { setLoadingSpinner } from './../../../store/shared/shared.action';
import { signupStart } from './../state/auth.actions';
import { AppState } from 'src/app/store/app.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  hide = true;
  constructor(private store:Store<AppState>){}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  onRegisterSubmit(){
    if(!this.registerForm.valid){
      return;
    }

   const email:any = this.registerForm!.value!['email'];
   const password:any = this.registerForm!.value!['password'];

   this.store.dispatch(setLoadingSpinner({status:true}));
   this.store.dispatch(signupStart({email,password}));
  }

  showErrors(formName:string):any{
    const formControlName = this.registerForm.get(formName);
    if(!formControlName!.valid){
      if(formControlName!.errors!['required']){
        return formName + ' is required'
      }
      // if(formControlName!.errors!['minlength']){
      //  return formName +' should be of minimun '+ formControlName!.errors!['minlength'].requiredLength + ' characters length';
      // }
    }
  }

}
