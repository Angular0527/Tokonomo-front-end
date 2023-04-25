import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from "./launch-routing.module";
import { LaunchIdoComponent } from "./launch-ido/launch-ido.component";

@NgModule({
  declarations: [
    LaunchIdoComponent
  ],
  imports: [
    LaunchRoutingModule,
    CommonModule
  ],
  providers: [

  ],
})
export class LaunchModule { }
