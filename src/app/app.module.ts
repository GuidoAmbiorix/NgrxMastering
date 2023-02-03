import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './components/counter/counter.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { counterReducer } from './components/state/counter.reducer';

import {ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { CustomCounterInputComponent } from './components/custom-counter-input/custom-counter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({counter:counterReducer},),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
