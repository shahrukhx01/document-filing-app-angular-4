import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitDocComponent } from './submitdoc.component';

const routes: Routes = [
    { path: '', component: SubmitDocComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitDocRoutingModule { }
