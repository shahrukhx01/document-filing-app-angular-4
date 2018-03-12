import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { SubmitDocRoutingModule } from './submitdoc-routing.module';
import { SubmitDocComponent } from './submitdoc.component';
import { Uploader } from 'angular2-http-file-upload';
import { SubmitDocService } from '../_services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubmitDocRoutingModule
  ],
  declarations: [SubmitDocComponent],
  providers : [
  SubmitDocService, Uploader
  ]
})
export class SubmitDocModule { }
