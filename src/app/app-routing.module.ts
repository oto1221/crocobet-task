import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users', component:UsersComponent
  },
  {
    path: 'details', component:DetailsComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: 'details/:id/posts', component: PostsComponent
  },
  { path: '', redirectTo: 'users',  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
