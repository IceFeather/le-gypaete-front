import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Image } from '../../model/image';

@Injectable({
  providedIn: 'root'
})
export class DiaporamaService {

  defilement = false;
  interval = 10000;
  images: Image[] = [];
  numero: number = 0;
  progress = 0;

  _defilement: Subscription;

  constructor() {}

  demarrerArreter() {
    this.defilement ? this.arreter() : this.demarrer();
  }

  demarrer() {
    if (this._defilement || this.defilement) {
      this.arreter();
    }
    this.defilement = true;
    this._defilement = interval(this.interval).subscribe( () => {
      this.suivant();
    });
  }

  arreter() {
    this.defilement = false;
    if (this._defilement) this._defilement.unsubscribe();
  }

  debut() {
    this.numero = 0;
  }

  fin() {
    this.numero = this.images.length - 1;
  }

  suivant() {
    if (this.numero < this.images.length - 1) {
      this.numero++;
    } else {
      this.debut();
    }
  }

  precedent() {
    if (this.numero > 0) {
      this.numero--;
    } else {
      this.fin();
    }
  }

  aller(numero :number) {
    this.numero = numero;
  }

}
