import { Lit } from './lit';
import { Tarifs } from './tarifs';

export interface Chambre {
  numero: number;
  nom: string;
  images: string[];
  nombrePersonnes: number;
  pmr: boolean;
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
  tv: boolean;
  wifi: boolean;
  autres: string[];
  tarifs: Tarifs;
}
