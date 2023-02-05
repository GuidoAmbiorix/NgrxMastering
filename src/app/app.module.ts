import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './components/counter/counter-index/counter.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { counterReducer } from './components/counter/state/counter.reducer';

import {ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { CustomCounterInputComponent } from './components/counter/custom-counter-input/custom-counter-input.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { EditComponent } from './components/posts/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
