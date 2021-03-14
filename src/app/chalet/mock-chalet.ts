import { Chalet } from './model/chalet';

export const CHALET: Chalet = {
  nom: "Le Gypaête",
  description: {
    fr: "Le Chalet comprend 5 chambres de diﬀérentes capacités, toutes avec salle d’eau privative et wc séparés, équipées avec télévision et lecteur DVD ",
    en: "The chalet has 5 rooms of different capacity, all with private bathroom and separate wc, equiped with TV and DVD player"
  },
  images: [
    {
      nom: 'chalet-1',
      url: '/assets/img/chalet/chalet-1.jpg'
    },
    {
      nom: 'chalet-2',
      url: '/assets/img/chalet/chalet-2.jpg'
    },
    {
      nom: 'chalet-3',
      url: '/assets/img/chalet/chalet-3.jpg'
    }
  ],
  prestations: [
    {
      fr: ["Charges comprises", "eau, éléctricité"],
      en: ["Including fee", "water, electricity"]
    },
    {
      fr: ["Bain à remous extérieur", "avec espace de change (douche, sèche serviettes, wc), serviettes ou peignoirs "],
      en: ["Outside relaxing bath", "with change space (shower, towel dryer, wc), towels"]
    },
    {
      fr: ["Equipements pour bébé"],
      en: ["Equipments for baby"]
    },
    {
      fr: ["Lits faits pour le nombre d'hôtes, linge de toilette "],
      en: ["Beds ready for the number of hosts, towels"]
    },
    {
      fr: ["Garage"],
      en: ["Indoor car park"]
    },
    {
      fr: ["Télévisions", "dans toutes les chambres avec lecteur DVD"],
      en: ["TV", "in all the rooms with DVD player"]
    },
    {
      fr: ["Nécessaire de ménage fourni"],
      en: ["Cleaning tools provided"]
    },
    {
      fr: ["Salles de bain équipées", "sèche cheveux, gel douche, shampoing "],
      en: ["Fully equiped bathrooms", "hairdryer, shower gel, shampoo"]
    },
    {
      fr: ["Cuisine", "café, thé, sucre..."],
      en: ["Kitchen", "coffee, tea, sugar..."]
    },
    {
      fr: ["Option : Courses faites"],
      en: ["Option : Groceries done"]
    }
  ],
  tarifs: {
    nombrePersonnesBase: 15,
    periode: [{
      dateDebutSejour: new Date(2020, 12, 20),
      dateFinSejour: new Date(2020, 12, 29),
      cout: 3000
    }],
    plusAnimal: [
      {condition: {fr: 'Chien ou chat', en: 'Dog or cat'}, cout: 8},
    ],
    prestationPayante: [
      {condition: {fr: 'Ménage quotidien', en: 'Room service'}, cout: 50, parNuit: true},
      {condition: {fr: 'Petit Dejeuner', en: 'Breakfast'}, cout: 13, parNuit: true, parPersonne: true}
    ]
  },
  conditionReservation: {
    arrhes: 30
  }
}
