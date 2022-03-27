import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private _breakpointSubscription: Subscription[] = [];

  isMobile: boolean;
  columns: number;

  constructor(private breakpointObserver: BreakpointObserver) {

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = true;
        this.columns = 1;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape, Breakpoints.Medium
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = true;
        this.columns = 2;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.columns = 2;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.columns = 3;
      }
    }));

  }

  close() {
    this._breakpointSubscription.forEach(s => s.unsubscribe());
  }

}
