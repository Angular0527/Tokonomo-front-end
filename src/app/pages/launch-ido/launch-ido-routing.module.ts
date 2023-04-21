import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchIdoComponent } from './launch-ido.component';

const routes: Routes = [
  { path: '', component: LaunchIdoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchIdoRoutingModule { }
