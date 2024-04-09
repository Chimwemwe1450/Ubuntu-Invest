import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './Profiletab1-routing.module';
import { ProgressBarModule } from 'primeng/progressbar';

import { ToastModule } from 'primeng/toast';
import { Tab1Page } from './Profiletab1.page';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    PasswordModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    InputMaskModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
ProgressBarModule,
ToastModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
