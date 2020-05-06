import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Lit } from '../model/lit';
import { Chambre } from '../model/chambre';
import { FondService } from 'src/app/fond/service/fond.service';

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

  chambre: Chambre;

  constructor(
    private route: ActivatedRoute,
    public fondService: FondService,
  ) { }

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
      }
    );
  }

}
