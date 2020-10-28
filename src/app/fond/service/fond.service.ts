import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondService {

  defilement = false;
  interval = 10000;
  images: string[] = [];
  numero = 0;
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
    this.defilement$ = interval(this.interval).subscribe( () => this.suivant() );
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
