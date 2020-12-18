import { Image } from '../../model/image';
import { Langue } from '../../langues/langue.type';

export interface Chalet {
  nom: String;
  description: {[K in Langue]?: string};
  images: Image[];
  prestations: {[K in Langue]?: [string, string?]}[];
  tarifs : {
    nombrePersonnesBase: number;
    periode: {
      dateDebutSejour: Date;
      dateFinSejour: Date;
      cout: number;
    }
    plusPersonne?: {condition: {[K in Langue]?: string}, cout: number}[];
    plusAnimal?: {condition: {[K in Langue]?: string}, cout: number}[];
    prestationPayante?: {
      condition: {[K in Langue]?: string},
      cout: number,
      parPersonne?: boolean,
      parNuit?: boolean,
    }[];
  }
  conditionReservation: {
    arrhes: number;
  }
}
