import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DiaporamaService } from '../service/diaporama.service';

@Component({
  selector: 'diaporama-miniatures',
  templateUrl: './miniatures.component.html',
  styleUrls: ['./miniatures.component.scss'],
  animations: [
    trigger('selectionne', [
      state('oui', style({
        width: '100%'
      })),
      state('non', style({
        width: '0%'
      })),
      transition('oui => non', [
        animate('0.5s ease')
      ]),
      transition('non => oui', [
        animate('1s ease')
      ])
    ])
  ]
})
export class MiniaturesComponent implements OnInit {

  @Input() diaporamaService: DiaporamaService;
  @Input() cols: Number;

  constructor() { }

  ngOnInit(): void {
  }

  choix(numero) {
    this.diaporamaService.aller(numero);
  }

}
