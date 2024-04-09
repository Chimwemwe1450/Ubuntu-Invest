import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    InputMaskModule,
    CheckboxModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  declarations: [ContactPage],
})
export class ContactPageModule {}
