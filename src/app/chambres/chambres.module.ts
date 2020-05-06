import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';

import { ChambresRoutingModule } from './chambres-routing.module';
import { MosaiqueComponent } from './mosaique/mosaique.component';




@NgModule({
  declarations: [MosaiqueComponent],
  imports: [
    CommonModule,
    ChambresRoutingModule,
    MatGridListModule,
    MatRippleModule,
  ]
})
export class ChambresModule { }
