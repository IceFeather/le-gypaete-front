export interface Lit {
  classe: Lit.Classe;
  largeur: number;
}

export namespace Lit {
  export enum Classe {
    KingSize = 'King Size',
    Double = 'Double',
    Simple = 'Simple',
  }
}
