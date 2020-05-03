import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondService {

  defilement = new BehaviorSubject<boolean>(false);
  interval = new BehaviorSubject<number>(10000);
  images = new BehaviorSubject<string[]>([]);
  numero = new BehaviorSubject<number>(0);
  defilementSub: Subscription;

  images$ = this.images.asObservable();

  constructor() {}

  demarrerArreter() {
    this.defilement.getValue() ? this.arreter() : this.demarrer();
  }

  demarrer() {
    this.defilement.next(true);
    this.defilementSub = interval(this.interval.value).subscribe( () => this.suivant() );
  }

  arreter() {
    this.defilement.next(false);
    if (this.defilementSub) this.defilementSub.unsubscribe();
  }

  debut() {
    this.numero.next(0);
  }

  fin() {
    this.numero.next(this.images.getValue().length - 1);
  }

  suivant() {
    if (this.numero.getValue() < this.images.getValue().length - 1) {
      this.numero.next(this.numero.getValue() + 1);
    } else {
      this.debut();
    }
  }

  precedent() {
    if (this.numero.getValue() > 0) {
      this.numero.next(this.numero.getValue() - 1);
    } else {
      this.fin();
    }
  }

}
