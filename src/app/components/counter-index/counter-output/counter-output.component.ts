import { AppState } from '../../../store/app.state';
import { CounterState } from '../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {}

  counter$ = this.store.select(getCounter).pipe(map(counter =>{
    return counter;
  }));
}
