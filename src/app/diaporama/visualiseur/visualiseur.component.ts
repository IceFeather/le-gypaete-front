import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  // ...
} from '@angular/animations';
import { DiaporamaService } from '../service/diaporama.service';

@Component({
  selector: 'diaporama-visualiseur',
  templateUrl: './visualiseur.component.html',
  styleUrls: ['./visualiseur.component.scss'],
  animations: [
    trigger('diapo', [
      transition(':increment', [
        query(':enter', [
          style({ backgroundPositionX: '100vh' }),
          animate('1s ease-out')
        ], { optional: true }),
        query(':leave', [
          animate('1s ease-out', style({ backgroundPositionX: '-100vh' }))
        ], { optional: true }),
      ]),
      transition(':decrement', [
        query(':enter', [
          style({ backgroundPositionX: '-100vh' }),
          animate('1s ease-out')
        ], { optional: true }),
        query(':leave', [
          animate('1s ease-out', style({ backgroundPositionX: '100vh' }))
        ], { optional: true }),
      ])
    ]),
  ]
})
export class VisualiseurComponent implements OnInit {

  @Input() height = '40vh';

  @Input() diaporamaService: DiaporamaService;

  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.diaporamaService.suivant();
  }

  moins() {
    this.diaporamaService.precedent();
  }

}
