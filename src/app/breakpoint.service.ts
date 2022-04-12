import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private _breakpointSubscription: Subscription[] = [];

  isMobile: boolean;
  isTablet: boolean;
  columns: number;
  littleColumns: number;

  constructor(private breakpointObserver: BreakpointObserver) {

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = true;
        this.isTablet = false;
        this.columns = 1;
        this.littleColumns = 3;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape, Breakpoints.Medium, Breakpoints.TabletPortrait
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = true;
        this.isTablet = true;
        this.columns = 2;
        this.littleColumns = 4;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.TabletLandscape
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isTablet = true;
        this.columns = 3;
        this.littleColumns = 4;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isTablet = false;
        this.columns = 2;
        this.littleColumns = 4;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isTablet = false;
        this.columns = 3;
        this.littleColumns = 5;
      }
    }));

  }

  close() {
    this._breakpointSubscription.forEach(s => s.unsubscribe());
  }

}
