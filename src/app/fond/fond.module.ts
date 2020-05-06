import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FondComponent } from './fond/fond.component';
import { FondService } from './service/fond.service';




@NgModule({
  declarations: [
    FondComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    FondComponent,
    // FondService,
  ],
  providers: [FondService],
})
export class FondModule { }
