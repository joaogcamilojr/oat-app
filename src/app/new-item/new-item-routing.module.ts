import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewItemPage } from './new-item.page';

const routes: Routes = [
  {
    path: '',
    component: NewItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewItemPageRoutingModule {}
