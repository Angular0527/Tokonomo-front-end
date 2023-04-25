import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchIdoComponent } from './launch-ido/launch-ido.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'launch',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'launch-ido'
      },
      {
        path: 'launch-ido',
        component: LaunchIdoComponent,
        data: {
          title: 'Launch-IDO'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule { }
