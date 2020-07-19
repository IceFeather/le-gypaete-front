import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VisualiseurComponent } from './visualiseur/visualiseur.component';


@NgModule({
  declarations: [VisualiseurComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    VisualiseurComponent
  ]
})
export class DiaporamaModule { }
