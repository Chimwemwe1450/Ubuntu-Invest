import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosePage } from './close.page';

const routes: Routes = [
  {
    path: '',
    component: ClosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosePageRoutingModule {}
