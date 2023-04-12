import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TokenFrameComponent } from './token-frame/token-frame.component';
import { StartComponent } from './start/start.component';
import { ProjectComponent } from './project/project.component';
import { FeatureComponent } from './feature/feature.component';
import { ConnectionComponent } from './connection/connection.component';
import { EconomyComponent } from './economy/economy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TokenFrameComponent,
    StartComponent,
    ProjectComponent,
    FeatureComponent,
    ConnectionComponent,
    EconomyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
