import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventorysPage } from './inventorys.page';

const routes: Routes = [
  {
    path: '',
    component: InventorysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventorysPageRoutingModule {}
