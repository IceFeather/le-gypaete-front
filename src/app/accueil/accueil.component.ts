import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription, interval, BehaviorSubject } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  // ...
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FondService } from '../fond/service/fond.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('* => *', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate('0.5s ease', style({
          transform: 'translateX(0)',
          opacity: 1
        })),
      ])
    ]),
    trigger('ligneAccroche', [
      transition('* => *', [
        style({ width: '0%' }),
        animate('3s ease', style({ width: '100%' })),
      ])
    ])
  ]
})
export class AccueilComponent implements OnInit, OnDestroy {

  _saison: 'hiver' | 'été' = 'hiver';
  saison$ = new BehaviorSubject(this._saison);
  set saison(s) {
    this._saison = s;
    this.saison$.next(s);
  }
  get saison() {
    return this._saison;
  }

  isMobile: boolean;

  images = {
    été: [
      '/assets/img/village-ete-jour-hd.jpg',
      '/assets/img/village-ete-jour-2-hd.jpg',
      '/assets/img/col-annes-ete-jour-hd.jpg',
    ],
    hiver: [
      '/assets/img/village-hiver-nuit-hd.jpg',
      '/assets/img/vallee-hiver-jour-hd.jpg',
    ]
  }

  accroche = {
    accroches: [
      {
        titre: "Le Gypaète vous ouvre ses portes toute l'année",
        texte: "avec la particularité d'avoir la possibilité de louer la totalité du chalet ou à la nuitée suivant les périodes"
      },
      {
        titre: "Profitez du confort du chalet et de ses prestations",
        texte: "de la tranquillité des lieux, de la vue sur la Chaine des Aravis, pour une pause assurée."
      }
    ],
    numero: 0,
    interval: 10000,
    defilement: true,
    subscription: Subscription,
    demarrer: function(): void {
      this.subscription = interval(this.interval).subscribe( () => this.suivante() );
      this.defilement = true;
    },
    arreter: function(): void {
      this.subscription.unsubscribe();
      this.defilement = false;
    },
    demarrerArreter: function(): void {
      !this.defilement ? this.demarrer() : this.arreter();
    },
    suivante: function(): void {
      this.numero < this.accroches.length - 1 ? this.numero++ : this.numero = 0;
    },
    precedente: function(): void {
      this.numero > 0 ? this.numero-- : this.numero = this.accroches.length - 1;
    }
  }

  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor(
    public fondService: FondService,
    private breakpointObserver: BreakpointObserver,
    public sanitizer: DomSanitizer,
  ) {
    this.saison$.subscribe((s) => {
      fondService.images = this.images[s]
    });
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches );
  }

  ngOnInit(): void {
    this.fondService.demarrer();
    this.accroche.demarrer();
  }

  ngOnDestroy(): void {
    this.fondService.arreter();
    this.accroche.arreter();
  }

  changerSaison(event) {
    this.fondService.debut();
    this.saison === 'été' ? this.saison = 'hiver' : this.saison = 'été';
  }

}
