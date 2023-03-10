import { getLoading, getError } from './store/shared/shared.selector';
import { AppState } from 'src/app/store/app.state';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'ngrxMaster';
  showLoading!:Observable<boolean>;
  errorMessage!:Observable<string>;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getError);
  }
}
