import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosePageRoutingModule } from './close-routing.module';

import { ClosePage } from './close.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosePageRoutingModule
  ],
  declarations: [ClosePage]
})
export class ClosePageModule {}
