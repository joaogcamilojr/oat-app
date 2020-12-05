import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventorysPageRoutingModule } from './inventorys-routing.module';

import { InventorysPage } from './inventorys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventorysPageRoutingModule
  ],
  declarations: [InventorysPage]
})
export class InventorysPageModule {}
