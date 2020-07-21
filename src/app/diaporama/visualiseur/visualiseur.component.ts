import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  stagger,
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

  @Input() height: number = 300;

  public count: number = 0;

  constructor(public diaporamaService: DiaporamaService) { }

  ngOnInit(): void {
  }

  plus() {
    this.count++;
    this.diaporamaService.suivant();
  }

  moins() {
    this.count--;
    this.diaporamaService.precedent();
  }

}
