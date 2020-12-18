import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaporamaService {

  defilement = false;
  interval = 10000;
  images = [];
  numero = 0;
  progress = 0;

  defilement$: Subscription;

  constructor() {}

  demarrerArreter() {
    this.defilement ? this.arreter() : this.demarrer();
  }

  demarrer() {
    if (this.defilement$ || this.defilement) {
      this.arreter();
    }
    this.defilement = true;
    this.defilement$ = interval(this.interval).subscribe( () => {
      this.suivant();
    });
  }

  arreter() {
    this.defilement = false;
    if (this.defilement$) this.defilement$.unsubscribe();
  }

  debut() {
    this.numero = 0;
  }

  fin() {
    this.numero = this.images.length - 1;
  }

  suivant() {
    if (this.numero < this.images.length - 1) {
      this.numero = this.numero + 1;
    } else {
      this.debut();
    }
  }

  precedent() {
    if (this.numero > 0) {
      this.numero = this.numero - 1;
    } else {
      this.fin();
    }
  }

}
