import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TokenFrameComponent } from './components/token-frame/token-frame.component';
import { StartComponent } from './pages/home/start/start.component';
import { ProjectComponent } from './pages/home/project/project.component';
import { FeatureComponent } from './pages/home/feature/feature.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { EconomyComponent } from './pages/home/economy/economy.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TokenFrameComponent,
    StartComponent,
    ProjectComponent,
    FeatureComponent,
    ConnectionComponent,
    EconomyComponent,
    FooterComponent,
    HomeComponent
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
