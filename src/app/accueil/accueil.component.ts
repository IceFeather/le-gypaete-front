import { Component, OnInit, OnDestroy } from '@angular/core';
import { FondService } from '../fond/fond.service';
import { Subscription, interval } from 'rxjs';
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

  saison = 'hiver';

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

  accroches = [
    {
      titre: "Le Gypaète vous ouvre ses portes toute l'année",
      texte: "avec la particularité d'avoir la possibilité de louer la totalité du chalet ou à la nuitée suivant les périodes"
    },
    {
      titre: "Profitez du confort du chalet et de ses prestations",
      texte: "de la tranquillité des lieux, de la vue sur la Chaine des Aravis, pour une pause assurée."
    },
  ]
  accrocheNumero = 0;
  accrocheInterval = 10000;
  accrocheSub: Subscription;

  constructor(
    public fondService: FondService,
    private breakpointObserver: BreakpointObserver,
  ) {
    fondService.images.next(this.images[this.saison]);
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches );
  }

  ngOnInit(): void {
    this.fondService.demarrer();
    this.accrocheSub = interval(this.accrocheInterval).subscribe( () => this.accrocheSuivante() );
  }

  ngOnDestroy(): void {
    this.fondService.arreter();
  }

  changerSaison(event) {
    this.fondService.debut();
    if (this.saison === 'été') {
      this.saison = 'hiver';
      this.fondService.images.next(this.images.hiver);
    } else {
      this.saison = 'été';
      this.fondService.images.next(this.images.été);
    }
  }

  accrocheSuivante() {
    this.accrocheNumero < this.accroches.length - 1 ? this.accrocheNumero++ : this.accrocheNumero = 0;
  }

}
