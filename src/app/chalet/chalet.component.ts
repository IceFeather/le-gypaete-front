import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chalet } from './model/chalet';
import { CHALET } from './mock-chalet';
import { DiaporamaService } from '../diaporama/service/diaporama.service';
import { FondService } from '../fond/service/fond.service';
import { TranslateService } from '@ngx-translate/core';
import { ChaletApiService } from './chalet.api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chalet',
  templateUrl: './chalet.component.html',
  styleUrls: ['./chalet.component.scss']
})
export class ChaletComponent implements OnInit, OnDestroy {

  isMobile: boolean;

  chalet: Chalet;

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

    this.chaletApiService.recupererTout().subscribe(chalets => {
      console.log(chalets);
      this.chalet = chalets[0];
      this.initFond();
      this.chaletLoaded = Promise.resolve(true);
    });
  }

  initFond(): void {
    if (this.chalet.images.length > 0) {
      this.fondService.images = this.chalet.images;
      this.fondService.debut();
    }
    this.diaporamaService.images = this.chalet.images;
    this.diaporamaService.debut();
  }

  ngOnDestroy(): void {
    this.diaporamaService.arreter();
    this.fondService.arreter();
    this._breakpointSubscription.unsubscribe();
  }

}
