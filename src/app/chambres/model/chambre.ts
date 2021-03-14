import { Langue } from 'src/app/langues/langue.type';
import { Image } from '../../model/image';
import { Lit } from './lit';
import { Tarifs } from './tarifs';

export interface Chambre {
  numero: number;
  nom: string;
  images: Image[];
  nombrePersonnesMax: number;
  description: {[K in Langue]?: string};
  pmr: boolean;
  lits: Lit[];
  terrasse: boolean;
  balcon: boolean;
  vues: {[K in Langue]?: string}[];
  salleDEau: {
    nombre: number;
    plus: {[K in Langue]?: string}[]
  };
  wc: {
    nombre: number;
    plus: {[K in Langue]?: string}[]
  };
  tv: boolean;
  wifi: boolean;
  autres: {[K in Langue]?: string}[];
  tarifs: {
    cout: number;
    nombrePersonnesBase: number;
    plusNuits?: {minimum: number, cout: number};
    plusPersonne?: {condition: {[K in Langue]?: string}, cout: number}[];
    plusAnimal?: {condition: {[K in Langue]?: string}, cout: number}[];
    prestationPayante?: {condition: {[K in Langue]?: string}, cout: number}[];
  }
}
