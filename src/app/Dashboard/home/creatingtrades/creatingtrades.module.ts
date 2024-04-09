import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatingtradesPageRoutingModule } from './creatingtrades-routing.module';

import { CreatingtradesPage } from './creatingtrades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatingtradesPageRoutingModule
  ],
  declarations: []
})
export class CreatingtradesPageModule {}
