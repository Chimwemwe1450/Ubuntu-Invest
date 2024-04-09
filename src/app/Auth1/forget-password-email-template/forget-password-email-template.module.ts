import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPasswordEmailTemplatePageRoutingModule } from './forget-password-email-template-routing.module';

import { ForgetPasswordEmailTemplatePage } from './forget-password-email-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPasswordEmailTemplatePageRoutingModule
  ],
  declarations: [ForgetPasswordEmailTemplatePage]
})
export class ForgetPasswordEmailTemplatePageModule {}
