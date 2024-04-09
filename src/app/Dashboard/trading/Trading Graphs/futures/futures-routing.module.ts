import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuturesPage } from './futures.page';

const routes: Routes = [
  {
    path: '',
    component: FuturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuturesPageRoutingModule {}
