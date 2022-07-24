import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent }
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
