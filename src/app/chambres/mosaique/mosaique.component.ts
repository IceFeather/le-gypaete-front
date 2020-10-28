import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Chambre } from '../model/chambre';
import { Lit } from '../model/lit';
import { stringify } from 'querystring';
import { CHAMBRES } from '../mock-chambres';


@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit {

  isMobile: boolean;
  columns: number;

  chambres: Chambre[] = CHAMBRES;

  debugBP: {bp: string, actif: boolean};
  debugBPs: [{bp: string, actif: boolean}];

  constructor(private breakpointObserver: BreakpointObserver) {
    // this.columns = this.columnsDefault;

    breakpointObserver.observe([
      Breakpoints.HandsetPortrait, Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 1;
        this.isMobile = true;
      }
    });

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 2;
        this.isMobile = true;
      }
    });

    breakpointObserver.observe([
      Breakpoints.Tablet, Breakpoints.Medium, Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 2;
        this.isMobile = false;
      }
    })

    breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 3;
        this.isMobile = false;
      }
    })

  }

  ngOnInit(): void {
  }

}
