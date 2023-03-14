import { AuthGuard } from './components/auth/services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'counter',loadChildren:() => import('./components/counter/counter.module').then(c => c.CounterModule)},
  {
  path:'posts',
  loadChildren:() =>
  import('./components/posts/posts.module').then(p => p.PostsModule),
  canActivate:[AuthGuard]
  },
  {path:'auth',loadChildren:() => import('./components/auth/auth.module').then(a => a.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
