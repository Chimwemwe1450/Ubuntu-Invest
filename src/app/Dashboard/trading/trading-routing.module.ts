import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradingPage } from './trading.page';
import { ForexPage } from 'src/app/Dashboard/trading/Trading Graphs/forex/forex.page';
import { IndicesPage } from 'src/app/Dashboard/trading/Trading Graphs/indices/indices.page';
import { FuturesPage } from 'src/app/Dashboard/trading/Trading Graphs/futures/futures.page';
const routes: Routes = [
  {
    path: '',
    component: TradingPage,
    children: [
      {
        path: 'tab1',
        component:ForexPage ,  // ForexPage with tabs
      },
      {
        path: 'tab2',
        component: FuturesPage,  // ForexPage with tabs
      },
      
      {
        path: 'tab3',
        component: IndicesPage,  // ForexPage with tabs
      },
      
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      }
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradingPageRoutingModule {}
