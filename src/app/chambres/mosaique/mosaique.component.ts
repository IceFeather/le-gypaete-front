import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Chambre } from '../model/chambre';
import { Lit } from '../model/lit';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit {

  isMobile: boolean;

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
      lits: [{classe: Lit.Classe.KingSize, largeur: 180}],
      terrasse: true,
      balcon: false,
      vues: ['Chaîne des Aravis'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      pmr: false,
      tv: true,
      autres: ['Lecteur DVD']
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
      lits: [{classe: Lit.Classe.Simple, largeur: 90}, {classe: Lit.Classe.Simple, largeur: 90}],
      terrasse: true,
      balcon: false,
      vues: ['Chaîne des Aravis'],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative"]},
      wc: {nombre: 1, plus: ["séparé"]},
      pmr: true,
      tv: true,
      autres: ['Lecteur DVD']
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
      pmr: true,
      tv: true,
      autres: ['Lecteur DVD']
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
      pmr: true,
      tv: true,
      autres: ['Lecteur DVD']
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
      lits: [
        {classe: Lit.Classe.KingSize, largeur: 180},
      ],
      terrasse: false,
      balcon: true,
      vues: [],
      salleDEau: {nombre: 1, plus: ["Salle d'eau privative", "Double douche"]},
      wc: {nombre: 1, plus: ["séparé"]},
      pmr: true,
      tv: true,
      autres: ['Lecteur DVD']
    }
  ]

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( bp => this.isMobile = bp.matches );
  }

  ngOnInit(): void {
  }

}
