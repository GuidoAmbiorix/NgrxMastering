import { COUNTER_STATE_NAME } from './state/counter.selector';
import { appReducer } from './../../store/app.state';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

import { CounterComponent } from './counter-index/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { counterReducer } from './state/counter.reducer';

const routes:Routes = [
  {path:'',component:CounterComponent}
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer),
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
    ]
})
export class CounterModule { }
