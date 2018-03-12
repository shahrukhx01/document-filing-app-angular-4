import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    { path: 'users', component: UsersComponent,data: {  title: 'Users' } },
    { path: '', component: AccountComponent, data: {title: 'My Account' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
