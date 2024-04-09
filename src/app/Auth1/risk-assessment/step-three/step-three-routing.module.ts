import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepThreePage } from './step-three.page';
import { StepFourPage } from '../step-four/step-four.page';
const routes: Routes = [
  {
    path: '',
    component: StepThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepThreePageRoutingModule {}
