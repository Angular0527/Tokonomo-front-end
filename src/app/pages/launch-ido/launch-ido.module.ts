import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchIdoComponent } from './launch-ido.component';
import { LaunchIdoRoutingModule } from "./launch-ido-routing.module";

@NgModule({
  declarations: [
    LaunchIdoComponent
  ],
  imports: [
    LaunchIdoRoutingModule,
    CommonModule
  ],
  providers: [

  ],
})
export class LaunchIdoModule { }
