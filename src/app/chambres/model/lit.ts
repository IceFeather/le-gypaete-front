export interface Lit {
  classe: Lit.Classe;
  largeur: number;
}

export namespace Lit {
  export enum Classe {
    KingSize,
    Double,
    Simple,
  }
}
