import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsPage } from './about-us.page';
import { Tab1Page } from '../about-ustabs/tab1/tab1.page';
import { Tab2Page } from '../about-ustabs/tab2/tab2.page';
const routes: Routes = [
  {
    path: '',
    component: AboutUsPage,
    children: [
      {
        path: 'tab1',
        component: Tab1Page,
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsPageRoutingModule {}
