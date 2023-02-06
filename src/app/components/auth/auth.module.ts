import { AUTH_STATE_NAME } from './state/auth.selector';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { AuthReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';


const routes:Routes = [
{path:'',children:[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent}
]}
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),

    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
