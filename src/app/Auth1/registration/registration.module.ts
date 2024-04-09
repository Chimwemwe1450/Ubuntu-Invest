import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { RegistrationPage } from './registration.page';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    DropdownModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    InputTextModule, 
    InputMaskModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule
  
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
