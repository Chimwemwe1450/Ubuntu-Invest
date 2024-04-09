import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradingPageRoutingModule } from './trading-routing.module';

import { TradingPage } from './trading.page';
import { ForexPage } from 'src/app/Dashboard/trading/Trading Graphs/forex/forex.page';
import { EconomicPage } from 'src/app/Dashboard/tools/economic/economic.page';
import { IndicesPage } from 'src/app/Dashboard/trading/Trading Graphs/indices/indices.page';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
    FormsModule,
    CheckboxModule,
    ButtonModule ,
    ReactiveFormsModule,
    PasswordModule,
    IonicModule,
    DropdownModule,
    TradingPageRoutingModule
  ],
  declarations: [TradingPage , ForexPage , IndicesPage ]
})
export class TradingPageModule {}
