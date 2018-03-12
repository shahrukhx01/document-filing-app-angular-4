import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxIdComponent } from './taxid.component';

const routes: Routes = [
    { path: '', component: TaxIdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxIdRoutingModule { }
