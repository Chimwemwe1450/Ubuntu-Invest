import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CreatingtradesPage } from './creatingtrades/creatingtrades.page';
import { CommoditiesPage } from './commodities/commodities.page';
import { IndicesTradePage } from './indices-trade/indices-trade.page';
import { ClosePage } from '../../close/close.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        component:CreatingtradesPage ,  // ForexPage with tabs
      },
      {
        path: 'tab2',
        component:CommoditiesPage ,  // ForexPage with tabs
      },
      
      {
        path: 'tab3',
        component:IndicesTradePage ,  // ForexPage with tabs
      },
      
      {
        path: 'tab4',
        component:ClosePage ,  // ForexPage with tabs
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
