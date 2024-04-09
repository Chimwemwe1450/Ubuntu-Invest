import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatingtradesPage } from './creatingtrades.page';

const routes: Routes = [
  {
    path: '',
    component: CreatingtradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatingtradesPageRoutingModule {}
