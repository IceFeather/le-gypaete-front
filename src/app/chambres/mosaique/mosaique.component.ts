import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Chambre } from '../model/chambre';
import { Lit } from '../model/lit';
import { stringify } from 'querystring';
import { CHAMBRES } from '../mock-chambres';
import { ChambresApiService } from '../chambres.api.service';
import { UtilisateurApiService } from 'src/app/utilisateur/utilisateur.api.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit, OnDestroy {

  isMobile: boolean;
  columns: number;

  chambres$: Observable<Chambre[]>;

  private _breakpointSubscription: Subscription[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private chambresApiService: ChambresApiService,
    public utilisateurApiService: UtilisateurApiService) {
    // this.columns = this.columnsDefault;

    this.chambres$ = this.chambresApiService.recupererTout();

  }

  ngOnInit(): void {
    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait, Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 1;
        this.isMobile = true;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 2;
        this.isMobile = true;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.Tablet, Breakpoints.Medium, Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 2;
        this.isMobile = false;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.columns = 3;
        this.isMobile = false;
      }
    }));
  }

  ngOnDestroy(): void {
    this._breakpointSubscription.forEach((s) => s.unsubscribe());
  }

}
