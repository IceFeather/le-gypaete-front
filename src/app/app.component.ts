import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, merge, noop, NEVER, Subscription } from 'rxjs';
import { map, mapTo, scan, startWith, switchMap, tap } from 'rxjs/operators';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Le Gypaete';

  saison = 'été';

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
    image: {
      numero: 0,
      path: '',
      set: () => {
        this.diaporamaFond.image.path = this.diaporamaFond.images[this.saison][this.diaporamaFond.image.numero];
        console.log(this.diaporamaFond.image);
      }
    },
    reset: () => {
      this.diaporamaFond.image.numero = 0;
      this.diaporamaFond.image.set();
    },
    suivant: () => {
      if (this.diaporamaFond.image.numero < this.diaporamaFond.images[this.saison].length - 1) {
        this.diaporamaFond.image.numero++;
        this.diaporamaFond.image.set();
      } else {
        this.diaporamaFond.reset();
      }
    },
    precedent: () => {
      if (this.diaporamaFond.image.numero > 0) {
        this.diaporamaFond.image.numero--;
        this.diaporamaFond.image.set();
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

  changerSaison() {
    if (this.saison === 'été') {
      this.saison = 'hiver';
    } else {
      this.saison = 'été';
    }
    this.diaporamaFond.image.numero = 0;
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
