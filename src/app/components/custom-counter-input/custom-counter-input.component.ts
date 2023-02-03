import { changeTitle, customIncrement } from './../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { CounterState } from '../state/counter.actions';
import { getTitle } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value!:number;
  title!:string;

  constructor(private store:Store<{counter:CounterState}>){}

  addToCounterForm = new FormGroup({
  addCounter:new FormControl(''),
  title:new FormControl('')
  });

  ngOnInit(): void {
    this.addToCounterForm.valueChanges.pipe(map((value:any) => {
      return value;
    }),tap(data =>{
      this.value = data.addCounter
    })).subscribe();

    this.store.select(getTitle).subscribe(title =>{
      this.title = title
    })
  }

  onAdd(){
  this.store.dispatch(customIncrement({value:this.value}))
  }

  changeTitle(){
  this.store.dispatch(changeTitle())
  }

}
