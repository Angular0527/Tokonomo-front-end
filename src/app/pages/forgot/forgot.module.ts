import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from "./forgot-routing.module";

@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    ForgotRoutingModule,
    CommonModule
  ],
  providers: [

  ],
})
export class ForgotModule { }
