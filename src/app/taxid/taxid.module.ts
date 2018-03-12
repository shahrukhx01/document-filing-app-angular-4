import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { TaxIdRoutingModule } from './taxid-routing.module';
import { TaxIdComponent } from './taxid.component';

import { AuthenticationService } from '../_services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaxIdRoutingModule
  ],
  declarations: [TaxIdComponent],
  providers : [
  AuthenticationService
  ]
})
export class TaxIdModule { }
