import { logoutStart } from './../auth/state/auth.actions';
import { isAuthenticated } from './../auth/state/auth.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated!:Observable<boolean>;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
  this.isAuthenticated = this.store.select(isAuthenticated)
  }

  onLogout(){
    this.store.dispatch(logoutStart())
  }

}
