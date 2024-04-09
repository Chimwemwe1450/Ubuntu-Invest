import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolsPage } from './tools.page';
import { EconomicPage } from 'src/app/Dashboard/tools/economic/economic.page';


const routes: Routes = [
  {
    path: '',
    component: ToolsPage,
    children: [
     
      {
        path: 'tab1',
        component: EconomicPage,
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
  exports: [RouterModule],
})
export class ToolsPageRoutingModule {}
