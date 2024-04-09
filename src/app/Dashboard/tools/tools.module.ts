import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsPageRoutingModule } from './tools-routing.module';
import { EconomicPage } from 'src/app/Dashboard/tools/economic/economic.page';
import { ToolsPage } from './tools.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsPageRoutingModule
  ],
  declarations: [ToolsPage , EconomicPage]
})
export class ToolsPageModule {}
