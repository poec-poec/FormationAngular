import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { FormComponent } from './../form/form.component';
import { ListitemComponent } from './../listitem/listitem.component';

const appRoutes: Routes = [
  { path: 'list', component: ListitemComponent },
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
