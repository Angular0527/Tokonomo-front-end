import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LandingPageComponent } from "./views/landing-page/landing-page.component";
import { SigninComponent } from "./views/signin/signin.component";
import {SignupComponent} from "./views/signup/signup.component";
import {ForgotComponent} from "./views/forgot/forgot.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'launchpad',
        loadChildren: () =>
          import('./views/launch/launch.module').then((m) => m.LaunchModule)
      },
    ]
  },
  {
    path: 'landing',
    component: LandingPageComponent,
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      title: 'Signin Page'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Signup Page'
    }
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    data: {
      title: 'Forgot Page'
    }
  },
  {path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
