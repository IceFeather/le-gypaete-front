import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { VisualiseurComponent } from './visualiseur/visualiseur.component';
import { MiniaturesComponent } from './miniatures/miniatures.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRipple, MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [VisualiseurComponent, MiniaturesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatRippleModule,
  ],
  exports: [
    VisualiseurComponent,
    MiniaturesComponent
  ]
})
export class DiaporamaModule { }
