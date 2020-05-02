import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('diapo', [
      // ...
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Le Gypaete';

  saison = 'hiver';

  diaporamaFond = {
    defilement : true,
    interval: 10000,
    images: {
      été: [
        '/assets/img/village-ete-jour-hd.jpg',
        '/assets/img/village-ete-jour-2-hd.jpg',
        '/assets/img/col-annes-ete-jour-hd.jpg',
      ],
      hiver: [
        '/assets/img/village-hiver-nuit-hd.jpg',
        '/assets/img/vallee-hiver-jour-hd.jpg',
      ]
    },
    numero: 0,
    reset: () => {
      this.diaporamaFond.numero = 0;
    },
    suivant: () => {
      if (this.diaporamaFond.numero < this.diaporamaFond.images[this.saison].length - 1) {
        this.diaporamaFond.numero++;
      } else {
        this.diaporamaFond.reset();
      }
    },
    precedent: () => {
      if (this.diaporamaFond.numero > 0) {
        this.diaporamaFond.numero--;
      } else {
        this.diaporamaFond.reset();
      }
    }
  };
  diaporamaFondSub: Subscription;

  ngOnInit(): void {
    this.diaporamaFond.reset();
    console.log(this.diaporamaFond);
    this.démarrerDiaporamaFond();
  }

  changerSaison(event) {
    if (this.saison === 'été') {
      this.saison = 'hiver';
    } else {
      this.saison = 'été';
    }
    this.diaporamaFond.reset();
  }

  démarrerDiaporamaFond() {
    this.diaporamaFondSub = interval(this.diaporamaFond.interval).subscribe(
      () => this.diaporamaFond.suivant()
    );
  }

  arrêterDiaporamaFond() {
    this.diaporamaFondSub.unsubscribe();
  }

}
