import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForexPageRoutingModule } from './forex-routing.module';

import { ForexPage } from './forex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForexPageRoutingModule
  ],
  declarations: []
})
export class ForexPageModule {}
