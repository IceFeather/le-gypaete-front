import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Chambre } from '../model/chambre';
import { Lit } from '../model/lit';
import { stringify } from 'querystring';


@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit {

  isMobile: boolean;
  columns: number;

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

  debugBP: {bp: string, actif: boolean};
  debugBPs: [{bp: string, actif: boolean}];

  constructor(private breakpointObserver: BreakpointObserver) {
    // this.columns = this.columnsDefault;

    breakpointObserver.observe([
      Breakpoints.HandsetPortrait, Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 1;
        this.isMobile = true;
      }
    });

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 2;
        this.isMobile = true;
      }
    });

    breakpointObserver.observe([
      Breakpoints.Tablet, Breakpoints.Medium, Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 2;
        this.isMobile = false;
      }
    })

    breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 3;
        this.isMobile = false;
      }
    })

  }

  ngOnInit(): void {
  }

}
