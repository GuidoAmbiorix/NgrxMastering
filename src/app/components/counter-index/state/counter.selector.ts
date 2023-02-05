import { CounterState } from './counter.actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState,state =>{
  return state.counter;
});

export const getTitle = createSelector(getCounterState,state =>{
  return state.title
})
