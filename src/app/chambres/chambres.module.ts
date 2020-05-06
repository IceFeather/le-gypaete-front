import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ChambresRoutingModule } from './chambres-routing.module';
import { MosaiqueComponent } from './mosaique/mosaique.component';
import { FondModule } from '../fond/fond.module';




@NgModule({
  declarations: [MosaiqueComponent],
  imports: [
    CommonModule,
    ChambresRoutingModule,
    MatGridListModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    FondModule,
  ]
})
export class ChambresModule { }
