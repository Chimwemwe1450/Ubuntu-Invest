import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepFivePage } from './step-five.page';
import { HomePage } from 'src/app/Dashboard/home/home.page';
const routes: Routes = [
  {
    path: '',
    component: StepFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepFivePageRoutingModule {}
