import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chalet } from './model/chalet';
import { CHALET } from './mock-chalet';
import { DiaporamaService } from '../diaporama/service/diaporama.service';
import { FondService } from '../fond/service/fond.service';
import { TranslateService } from '@ngx-translate/core';
import { ChaletApiService } from './chalet.api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chalet',
  templateUrl: './chalet.component.html',
  styleUrls: ['./chalet.component.scss']
})
export class ChaletComponent implements OnInit, OnDestroy {

  isMobile: boolean;

  chalet$: Observable<Chalet>;

  chaletLoaded: Promise<boolean>;

  private _breakpointSubscription: Subscription;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private diaporamaService: DiaporamaService,
      private fondService: FondService,
      public translateService: TranslateService,
      private chaletApiService: ChaletApiService
    ) {

   }

  ngOnInit(): void {
    this._breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches );

    this.chalet$ = this.chaletApiService.recupererAvecNom('Le Gypaête');
    this.initFond();
  }

  initFond(): void {
    this.chalet$.subscribe(chalet => {
      if (chalet.images.length > 0) {
        this.fondService.images = chalet.images;
        this.fondService.debut();
      }
      this.diaporamaService.images = chalet.images;
      this.diaporamaService.debut();
    })
  }

  ngOnDestroy(): void {
    this.diaporamaService.arreter();
    this.fondService.arreter();
    this._breakpointSubscription.unsubscribe();
  }

}
