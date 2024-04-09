import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicesTradePage } from './indices-trade.page';

const routes: Routes = [
  {
    path: '',
    component: IndicesTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicesTradePageRoutingModule {}
