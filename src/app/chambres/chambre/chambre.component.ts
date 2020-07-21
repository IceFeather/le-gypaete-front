import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Lit } from '../model/lit';
import { Chambre } from '../model/chambre';
import { FondService } from 'src/app/fond/service/fond.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DiaporamaService } from 'src/app/diaporama/service/diaporama.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit {

  numero = 0;

  chambres: Chambre[] = [
    {
      numero: 1,
      nom: 'Suite Le Chamois',
      images: [
        '/assets/img/chambre/chambre-exemple-1.jpg',
        '/assets/img/chambre/chambre-exemple-2.jpg',
        '/assets/img/chambre/chambre-exemple-3.jpg',
        '/assets/img/chambre/chambre-exemple-4.jpg',
        '/assets/img/chambre/chambre-exemple-5.jpg',
      ],
      nombrePersonnes: 2,
      pmr: false,
      lits: [{classe: 'King Size', largeur: 180}],
      terrasse: true,
      balcon: false,
      vues: ['Chaîne des Aravis'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      wifi: true,
      autres: ['Lecteur DVD'],
      tarifs: {
        nuit: 140,
        plusnuits: {condition: 2, cout: 130}
      }
    },
    {
      numero: 2,
      nom: 'La Belette',
      images: [
        '/assets/img/chambre/chambre-exemple-2.jpg',
        '/assets/img/chambre/chambre-exemple-3.jpg',
        '/assets/img/chambre/chambre-exemple-4.jpg',
        '/assets/img/chambre/chambre-exemple-5.jpg',
        '/assets/img/chambre/chambre-exemple-1.jpg',
      ],
      nombrePersonnes: 2,
      pmr: true,
      lits: [{classe: 'Simple', largeur: 90}, {classe: 'Simple', largeur: 90}],
      terrasse: true,
      balcon: false,
      vues: ['Chaîne des Aravis'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      wifi: true,
      autres: ['Lecteur DVD'],
      tarifs: {
        nuit: 110,
        plusnuits: {condition: 2, cout: 100}
      }
    },
    {
      numero: 3,
      nom: 'Le Renard',
      images: [
        '/assets/img/chambre/chambre-exemple-3.jpg',
        '/assets/img/chambre/chambre-exemple-4.jpg',
        '/assets/img/chambre/chambre-exemple-5.jpg',
        '/assets/img/chambre/chambre-exemple-1.jpg',
        '/assets/img/chambre/chambre-exemple-2.jpg',
      ],
      nombrePersonnes: 5,
      pmr: false,
      lits: [
        {classe: 'Double', largeur: 160},
        {classe: 'Simple', largeur: 90},
        {classe: 'Simple', largeur: 90},
        {classe: 'Simple', largeur: 90}],
      terrasse: false,
      balcon: true,
      vues: ['Chaîne des Aravis', 'Roc des Tours'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      wifi: true,
      autres: ['Lecteur DVD'],
      tarifs: {
        nuit: 135,
        plusnuits: {condition: 2, cout: 125},
        pluspersonne: [
          {condition: 'Enfant de 2 à 5 ans', cout: 15},
          {condition: 'Enfant de 6 à 12 ans', cout: 25},
          {condition: 'Plus de 12 ans et adulte', cout: 35},
        ]
      }
    },
    {
      numero: 4,
      nom: 'Le Bouquetin',
      images: [
        '/assets/img/chambre/chambre-exemple-4.jpg',
        '/assets/img/chambre/chambre-exemple-5.jpg',
        '/assets/img/chambre/chambre-exemple-1.jpg',
        '/assets/img/chambre/chambre-exemple-2.jpg',
        '/assets/img/chambre/chambre-exemple-3.jpg',
      ],
      nombrePersonnes: 5,
      pmr: false,
      lits: [
        {classe: 'Double', largeur: 160},
        {classe: 'Simple', largeur: 90},
        {classe: 'Simple', largeur: 90},
        {classe: 'Simple', largeur: 90}],
      terrasse: false,
      balcon: true,
      vues: ['Chaîne des Aravis', 'Roc des Tours'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      wifi: true,
      autres: ['Lecteur DVD'],
      tarifs: {
        nuit: 135,
        plusnuits: {condition: 2, cout: 125},
        pluspersonne: [
          {condition: 'Enfant de 2 à 5 ans', cout: 15},
          {condition: 'Enfant de 6 à 12 ans', cout: 25},
          {condition: 'Plus de 12 ans et adulte', cout: 35},
        ]
      }
    },
    {
      numero: 5,
      nom: 'Le Loup',
      images: [
        '/assets/img/chambre/chambre-exemple-5.jpg',
        '/assets/img/chambre/chambre-exemple-1.jpg',
        '/assets/img/chambre/chambre-exemple-2.jpg',
        '/assets/img/chambre/chambre-exemple-3.jpg',
        '/assets/img/chambre/chambre-exemple-4.jpg',
      ],
      nombrePersonnes: 5,
      pmr: false,
      lits: [
        {classe: 'King Size', largeur: 180},
      ],
      terrasse: false,
      balcon: true,
      vues: [],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative", "Double douche"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      wifi: true,
      autres: ['Lecteur DVD'],
      tarifs: {
        nuit: 90,
        plusnuits: {condition: 2, cout: 80},
      }
    }
  ]

  chambre: Chambre;

  isMobile: boolean;

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    public fondService: FondService,
    public diaporamaService: DiaporamaService,
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small
    ]).subscribe(
      bp => this.isMobile = bp.matches
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.chambre = this.chambres[Number(params.get('numero'))-1];
        console.log('BEFORE');
        console.log(this.fondService.images.value);
        this.fondService.images.next(this.chambre.images);
        console.log('AFTER');
        console.log(this.fondService.images.value);
        this.fondService.debut();
        console.log('CURR = ' + this.fondService.images.value[this.fondService.numero.value]);

        this.diaporamaService.images.next(this.chambre.images);
        this.diaporamaService.debut();
        this.diaporamaService.interval.next(5000);
        // this.diaporamaService.demarrer();
      }
    );
  }

}
