import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StepTwoPageRoutingModule } from './step-two-routing.module';

import { StepTwoPage } from './step-two.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StepTwoPageRoutingModule
  ],
  declarations: [StepTwoPage]
})
export class StepTwoPageModule {}
