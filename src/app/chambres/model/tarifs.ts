export interface Tarifs {
  nuit: number;
  plusnuits?: {condition: number, cout: number};
  pluspersonne?: {condition: string, cout: number}[];
}
