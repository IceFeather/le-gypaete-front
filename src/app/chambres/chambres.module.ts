import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { ChambresRoutingModule } from './chambres-routing.module';
import { MosaiqueComponent } from './mosaique/mosaique.component';
import { ChambreComponent } from './chambre/chambre.component';
import { DiaporamaModule } from '../diaporama/diaporama.module';




@NgModule({
  declarations: [
    MosaiqueComponent,
    ChambreComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    DiaporamaModule,
    ChambresRoutingModule,
  ]
})
export class ChambresModule { }
