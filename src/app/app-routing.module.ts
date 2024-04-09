import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth1/shared/AuthGuard.service';
const routes: Routes = [
  {
    path: 'home',
   
    loadChildren: () =>
      import('./Dashboard/home/home.module').then((m) => m.HomePageModule),
      canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./Auth1/registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
      
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Auth1/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forget',
    loadChildren: () =>
      import('./Auth1/forget/forget.module').then((m) => m.ForgetPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./Dashboard/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('./Dashboard/tools/tools.module').then((m) => m.ToolsPageModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'trading',
    loadChildren: () =>
      import('./Dashboard/trading/trading.module').then(
        (m) => m.TradingPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./Dashboard/contact/contact.module').then(
        (m) => m.ContactPageModule
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./Dashboard/about-us/about-us.module').then(
        (m) => m.AboutUsPageModule
        
      ),
      canActivate: [AuthGuard],
  },
  {
    path: 'forget-password-email-template',
    loadChildren: () => import('./Auth1/forget-password-email-template/forget-password-email-template.module').then( m => m.ForgetPasswordEmailTemplatePageModule)
  },
  {
    path: 'forex',
    loadChildren: () => import('./Dashboard/trading/Trading Graphs/forex/forex.module').then( m => m.ForexPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'indices',
    loadChildren: () => import('./Dashboard/trading/Trading Graphs/indices/indices.module').then( m => m.IndicesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'futures',
    loadChildren: () => import('./Dashboard/trading/Trading Graphs/futures/futures.module').then( m => m.FuturesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'risk-assessment',
    loadChildren: () => import('./Auth1/risk-assessment/risk-assessment.module').then( m => m.RiskAssessmentPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'step-two',
    loadChildren: () => import('./Auth1/risk-assessment/step-two/step-two.module').then( m => m.StepTwoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'step-three',
    loadChildren: () => import('./Auth1/risk-assessment/step-three/step-three.module').then( m => m.StepThreePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'step-four',
    loadChildren: () => import('./Auth1/risk-assessment/step-four/step-four.module').then( m => m.StepFourPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'step-five',
    loadChildren: () => import('./Auth1/risk-assessment/step-five/step-five.module').then( m => m.StepFivePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'step-one',
    loadChildren: () => import('./Auth1/risk-assessment/step-one/step-one.module').then( m => m.StepOnePageModule)
  },
  {
    path: 'creatingtrades',
    loadChildren: () => import('./Dashboard/home/creatingtrades/creatingtrades.module').then( m => m.CreatingtradesPageModule)
  },
  {
    path: 'commodities',
    loadChildren: () => import('./Dashboard/home/commodities/commodities.module').then( m => m.CommoditiesPageModule)
  },
  {
    path: 'indices-trade',
    loadChildren: () => import('./Dashboard/home/indices-trade/indices-trade.module').then( m => m.IndicesTradePageModule)
  },
  {
    path: 'close',
    loadChildren: () => import('./close/close.module').then( m => m.ClosePageModule)
  },
  {
    path: 'trade-history',
    loadChildren: () => import('./trade-history/trade-history.module').then( m => m.TradeHistoryPageModule),
    canActivate: [AuthGuard],
  },



















];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
