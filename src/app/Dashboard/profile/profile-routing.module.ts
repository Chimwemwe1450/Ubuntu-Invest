import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

import { Tab2Page } from '../profiletabs/tab2/Profile.tab2.page';
import { Tab1Page } from '../profiletabs/tab1/Profiletab1.page';
const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: 'tab1',
        component: Tab1Page,
      },
      {
        path: 'tab2',
        component: Tab2Page,
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
export class ProfilePageRoutingModule {}
