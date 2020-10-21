import { Chambre } from './model/chambre';

export const CHAMBRES: Chambre[] = [
  {
    numero: 1,
    nom: 'Suite Le Chamois',
    images: [],
    nombrePersonnesMax: 2,
    description: {
      fr: "Description de la chambre, c'est une belle chambre...",
      en: "Description of the room, that's a nice room..."
    },
    pmr: false,
    lits: [{classe: 'King Size', largeur: 180}],
    terrasse: true,
    balcon: false,
    vues: [{fr: 'Chaîne des Aravis'}],
    salleDEau: {nombre: 1, plus: [{fr: "Salle d'eau privative", en: "Private bathroom"}]},
    wc: {nombre: 1, plus: [{fr: 'WC séparé', en: 'separate WC'}]},
    tv: true,
    wifi: true,
    autres: [{fr: 'Lecteur DVD', en: 'DVD player'}],
    tarifs: {
      nuit: 140,
      nombrePersonnesbase: 2,
      plusNuits: {minimum: 2, cout: 130},
      plusAnimal: [
        {condition: {fr: 'Chien ou chat', en: 'Dog or cat'}, cout: 8},
      ]
    }
  },
  {
    numero: 2,
    nom: 'La Belette',
    images: [],
    nombrePersonnesMax: 2,
    description: {
      fr: "Description de la chambre, c'est une belle chambre...",
      en: "Description of the room, that's a nice room..."
    },
    pmr: true,
    lits: [{classe: 'Simple', largeur: 90}, {classe: 'Simple', largeur: 90}],
    terrasse: true,
    balcon: false,
    vues: [{fr: 'Chaîne des Aravis'}],
    salleDEau: {nombre: 1, plus: [{fr: "Salle d'eau privative", en: "Private bathroom"}]},
    wc: {nombre: 1, plus: [{fr: "séparé", en: 'separate WC'}]},
    tv: true,
    wifi: true,
    autres: [{fr: 'Lecteur DVD', en: 'DVD player'}],
    tarifs: {
      nuit: 110,
      nombrePersonnesbase: 2,
      plusNuits: {minimum: 2, cout: 100},
      plusAnimal: [
        {condition: {fr: 'Chien ou chat', en: 'Dog or cat'}, cout: 8},
      ]
    }
  },
  {
    numero: 3,
    nom: 'Le Renard',
    images: [],
    nombrePersonnesMax: 5,
    description: {
      fr: "Description de la chambre, c'est une belle chambre...",
      en: "Description of the room, that's a nice room..."
    },
    pmr: false,
    lits: [
      {classe: 'Double', largeur: 160},
      {classe: 'Simple', largeur: 90},
      {classe: 'Simple', largeur: 90},
      {classe: 'Simple', largeur: 90}],
    terrasse: false,
    balcon: true,
    vues: [{fr: 'Chaîne des Aravis'}, {fr: 'Roc des Tours'}],
    salleDEau: {nombre: 1, plus: [{fr: "Salle d'eau privative", en: "Private bathroom"}]},
    wc: {nombre: 1, plus: [{fr: "séparé", en: 'separate WC'}]},
    tv: true,
    wifi: true,
    autres: [{fr: 'Lecteur DVD', en: 'DVD player'}],
    tarifs: {
      nuit: 135,
      nombrePersonnesbase: 2,
      plusNuits: {minimum: 2, cout: 125},
      plusPersonne: [
        {condition: {fr: 'Enfant de 2 à 5 ans', en: 'Child from 2 to 5 years old'}, cout: 15},
        {condition: {fr: 'Enfant de 6 à 12 ans', en: 'Child from 6 to 12 years old'}, cout: 25},
        {condition: {fr: 'Plus de 12 ans et adulte', en: 'More than 12 years old and adult'}, cout: 35},
      ],
      plusAnimal: [
        {condition: {fr: 'Chien ou chat', en: 'Dog or cat'}, cout: 8},
      ]
    }
  },
  {
    numero: 4,
    nom: 'Le Bouquetin',
    images: [],
    nombrePersonnesMax: 5,
    description: {
      fr: "Description de la chambre, c'est une belle chambre...",
      en: "Description of the room, that's a nice room..."
    },
    pmr: false,
    lits: [
      {classe: 'Double', largeur: 160},
      {classe: 'Simple', largeur: 90},
      {classe: 'Simple', largeur: 90},
      {classe: 'Simple', largeur: 90}],
    terrasse: false,
    balcon: true,
    vues: [{fr: 'Chaîne des Aravis'}, {fr: 'Roc des Tours'}],
    salleDEau: {nombre: 1, plus: [{fr: "Salle d'eau privative", en: "Private bathroom"}]},
    wc: {nombre: 1, plus: [{fr: "séparé", en: 'separate WC'}]},
    tv: true,
    wifi: true,
    autres: [{fr: 'Lecteur DVD', en: 'DVD player'}],
    tarifs: {
      nuit: 135,
      nombrePersonnesbase: 2,
      plusNuits: {minimum: 2, cout: 125},
      plusPersonne: [
        {condition: {fr: 'Enfant de 2 à 5 ans', en: 'Child from 2 to 5 years old'}, cout: 15},
        {condition: {fr: 'Enfant de 6 à 12 ans', en: 'Child from 6 to 12 years old'}, cout: 25},
        {condition: {fr: 'Plus de 12 ans et adulte', en: 'More than 12 years old and adult'}, cout: 35},
      ],
      plusAnimal: [
        {condition: {fr: 'Chien ou chat', en: 'Dog or cat'}, cout: 8},
      ]
    }
  },
  {
    numero: 5,
    nom: 'Le Loup',
    images: [],
    nombrePersonnesMax: 2,
    description: {
      fr: "Description de la chambre, c'est une belle chambre...",
      en: "Description of the room, that's a nice room..."
    },
    pmr: false,
    lits: [
      {classe: 'King Size', largeur: 180},
    ],
    terrasse: false,
    balcon: true,
    vues: [],
    salleDEau: {nombre: 1, plus: [{fr: "Salle d'eau privative", en: "Private bathroom"}, {fr: "Double douche", en: "Double shower"}]},
    wc: {nombre: 1, plus: [{fr: "séparé", en: 'separate WC'}]},
    tv: true,
    wifi: true,
    autres: [{fr: 'Lecteur DVD'}],
    tarifs: {
      nuit: 90,
      nombrePersonnesbase: 2,
      plusNuits: {minimum: 2, cout: 80},
      plusAnimal: [
        {condition: {fr: 'Chien ou chat', en: 'Dog or cat'}, cout: 8},
      ]
    }
  }
]
