import { Chambre } from './model/chambre';

export const CHAMBRES: Chambre[] = [
  {
    numero: 1,
    nom: 'Suite Le Chamois',
    images: [],
    nombrePersonnes: 2,
    description: "Description de la chambre, c'est une belle chambre...",
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
    images: [],
    nombrePersonnes: 2,
    description: "Description de la chambre, c'est une belle chambre...",
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
    images: [],
    nombrePersonnes: 5,
    description: "Description de la chambre, c'est une belle chambre...",
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
    images: [],
    nombrePersonnes: 5,
    description: "Description de la chambre, c'est une belle chambre...",
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
    images: [],
    nombrePersonnes: 5,
    description: "Description de la chambre, c'est une belle chambre...",
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
