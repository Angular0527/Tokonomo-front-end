import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from "../component/header/landing-header.component";
import { LandingPageComponent } from "./landing-page.component";
import { TokenFrameComponent } from "../component/token-frame/token-frame.component";
import { StartComponent } from "./start/start.component";
import { ProjectComponent } from "./project/project.component";
import { FeatureComponent } from "./feature/feature.component";
import { EconomyComponent } from "./economy/economy.component";
import { LandingFooterComponent } from "../component/footer/landing-footer.component";
import { ConnectionComponent } from "./connection/connection.component";
import { LandingPageRoutingModule } from "./landing-page-routing.module";


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingHeaderComponent,
    TokenFrameComponent,
    StartComponent,
    ProjectComponent,
    FeatureComponent,
    EconomyComponent,
    LandingFooterComponent,
    ConnectionComponent
  ],
  exports: [
    LandingPageComponent,
    LandingHeaderComponent,
    TokenFrameComponent,
    StartComponent,
    ProjectComponent,
    FeatureComponent,
    EconomyComponent,
    LandingFooterComponent,
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
