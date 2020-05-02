import { Component, OnInit } from '@angular/core';
import { FondService } from '../fond/fond.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  saison = 'hiver';

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

  constructor(public fondService: FondService) {
    fondService.images.next(this.images[this.saison]);
  }

  ngOnInit(): void {
    this.fondService.demarrer();
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

}
