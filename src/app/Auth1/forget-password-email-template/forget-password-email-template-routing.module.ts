import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPasswordEmailTemplatePage } from './forget-password-email-template.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordEmailTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPasswordEmailTemplatePageRoutingModule {}
