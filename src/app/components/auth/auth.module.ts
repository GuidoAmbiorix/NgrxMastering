import { MaterialModule } from './../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
