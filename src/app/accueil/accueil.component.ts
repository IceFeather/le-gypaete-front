import { Component, OnInit } from '@angular/core';
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
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':increment, * => 0, void => *', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.5s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class AccueilComponent implements OnInit {

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
    private deviceService: DeviceDetectorService,
  ) {
    fondService.images.next(this.images[this.saison]);
    this.isMobile = deviceService.isMobile();
  }

  ngOnInit(): void {
    this.fondService.demarrer();
    this.accrocheSub = interval(this.accrocheInterval).subscribe( () => this.accrocheSuivante() );
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
