import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListitemComponent } from '../commandesModule/listitem/listitem.component';
import { FormComponent } from '../commandesModule/form/form.component';

const commandesRoutes: Routes = [
  { path: 'list', component: ListitemComponent },
  { path: 'form', component: FormComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      commandesRoutes
    )
  ],
  declarations: []
})
export class RoutingCommandesModule { }
