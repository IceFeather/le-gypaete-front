import { Lit } from './lit';

export interface Chambre {
  numero: number;
  nom: string;
  images: string[];
  nombrePersonnes: number;
  lits: Lit[];
  terrasse: boolean;
  balcon: boolean;
  vues: string[];
  salleDEau: {
    nombre: number;
    plus: string[]
  };
  wc: {
    nombre: number;
    plus: string[]
  };
  pmr: boolean;
  tv: boolean;
  autres: string[];
}
