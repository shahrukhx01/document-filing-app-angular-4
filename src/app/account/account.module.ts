import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';


import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [AccountComponent, UsersComponent, UserDetailComponent],


})
export class AccountModule { }
