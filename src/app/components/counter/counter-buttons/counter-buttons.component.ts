import { AppState } from '../../../store/app.state';
import { increment, decrement, reset } from '../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {}

  Increment(){
  this.store.dispatch(increment())
  }

  Decrement(){
  this.store.dispatch(decrement())
  }

  Reset(){
  this.store.dispatch(reset())
  }

}
