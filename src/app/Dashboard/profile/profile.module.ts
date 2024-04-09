import { NgModule } from '@angular/core';


import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { DropdownModule } from 'primeng/dropdown';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Tab2Page } from '../profiletabs/tab2/Profile.tab2.page';
import { Tab1Page } from '../profiletabs/tab1/Profiletab1.page';
@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    InputMaskModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule


  ],
  declarations: [ProfilePage ,Tab2Page ,Tab1Page]
})
export class ProfilePageModule {}
