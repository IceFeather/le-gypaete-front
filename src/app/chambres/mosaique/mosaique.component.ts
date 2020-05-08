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
      lits: [{classe: Lit.Classe.KingSize, largeur: 180}],
      terrasse: true,
      balcon: false,
      vues: ['Chaîne des Aravis'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      autres: ['Lecteur DVD'],
      tarifs: null
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
      lits: [{classe: Lit.Classe.Simple, largeur: 90}, {classe: Lit.Classe.Simple, largeur: 90}],
      terrasse: true,
      balcon: false,
      vues: ['Chaîne des Aravis'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      autres: ['Lecteur DVD'],
      tarifs: null
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
        {classe: Lit.Classe.Double, largeur: 160},
        {classe: Lit.Classe.Simple, largeur: 90},
        {classe: Lit.Classe.Simple, largeur: 90},
        {classe: Lit.Classe.Simple, largeur: 90}],
      terrasse: false,
      balcon: true,
      vues: ['Chaîne des Aravis', 'Roc des Tours'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      autres: ['Lecteur DVD'],
      tarifs: null
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
        {classe: Lit.Classe.Double, largeur: 160},
        {classe: Lit.Classe.Simple, largeur: 90},
        {classe: Lit.Classe.Simple, largeur: 90},
        {classe: Lit.Classe.Simple, largeur: 90}],
      terrasse: false,
      balcon: true,
      vues: ['Chaîne des Aravis', 'Roc des Tours'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      autres: ['Lecteur DVD'],
      tarifs: null
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
        {classe: Lit.Classe.KingSize, largeur: 180},
      ],
      terrasse: false,
      balcon: true,
      vues: [],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative", "Double douche"]},
      wc: {nombre: 1, plus: ["séparé"]},
      tv: true,
      autres: ['Lecteur DVD'],
      tarifs: null
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
