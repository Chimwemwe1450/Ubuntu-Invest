import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './Profiletab2-routing.module';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

import { DropdownModule } from 'primeng/dropdown';

import { Tab2Page } from './Profile.tab2.page';

@NgModule({
  imports: [
    CommonModule,
    PasswordModule ,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputMaskModule,
    InputTextModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
