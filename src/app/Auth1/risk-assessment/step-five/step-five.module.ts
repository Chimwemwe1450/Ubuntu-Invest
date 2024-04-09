import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { StepFivePageRoutingModule } from './step-five-routing.module';

import { StepFivePage } from './step-five.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StepFivePageRoutingModule
  ],
  declarations: [StepFivePage]
})
export class StepFivePageModule {}
