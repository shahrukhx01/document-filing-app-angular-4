import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
   {  path: '',  redirectTo: 'home',    pathMatch: 'full'  },
   {  path: '',  component: FullLayoutComponent,   data: { title: 'Home' }, canActivate: [AuthGuard],
    children: [

    ]
  } ,

  {
  path: 'tax-id-application',  component: FullLayoutComponent, data: { title: 'Tax-Id'},
  children: [
    {
      path: '',
      loadChildren: './taxid/taxid.module#TaxIdModule',
    }
  ]
  },

  {
  path: 'submit-doc',  component: FullLayoutComponent, data: { title: 'Submit Doc'},
  children: [
    {
      path: '',
      loadChildren: './submitdoc/submitdoc.module#SubmitDocModule',
    }
  ]
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
