import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout'
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FondService } from './fond/service/fond.service';
import { ChambresModule } from './chambres/chambres.module';
import { FondModule } from './fond/fond.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot(),
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FondModule.forRoot(),
    ChambresModule,
  ],
  providers: [FondService],
  bootstrap: [AppComponent]
})
export class AppModule { }
