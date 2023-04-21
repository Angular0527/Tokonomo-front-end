import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {ForgotModule} from "./pages/forgot/forgot.module";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module')
      .then(mod => mod.SignupModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module')
      .then(mod => mod.ForgotModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },
  {
    path: 'launch_ido',
    loadChildren: () => import('./pages/launch-ido/launch-ido.module')
      .then(mod => mod.LaunchIdoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
