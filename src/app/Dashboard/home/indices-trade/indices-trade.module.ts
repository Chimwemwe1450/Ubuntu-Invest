import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicesTradePageRoutingModule } from './indices-trade-routing.module';

import { IndicesTradePage } from './indices-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicesTradePageRoutingModule
  ],
  declarations: [IndicesTradePage]
})
export class IndicesTradePageModule {}
