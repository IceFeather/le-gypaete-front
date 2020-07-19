import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { DiaporamaService } from '../service/diaporama.service';

@Component({
  selector: 'diaporama-visualiseur',
  templateUrl: './visualiseur.component.html',
  styleUrls: ['./visualiseur.component.scss'],
  animations: [
    trigger('diapo', [
      // ...
      transition(':enter', [
        style({ backgroundPositionX: '50vh' }),
        animate('0.5s')
      ]),
      transition(':leave', [
        animate('0.5s', style({ backgroundPositionX: '-50vh' }))
      ]),
    ])
  ]
})
export class VisualiseurComponent implements OnInit {

  constructor(public diaporamaService: DiaporamaService) { }

  ngOnInit(): void {
  }

}
