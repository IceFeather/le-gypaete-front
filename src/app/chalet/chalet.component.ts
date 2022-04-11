import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chalet } from './model/chalet';
import { CHALET } from './mock-chalet';
import { DiaporamaService } from '../diaporama/service/diaporama.service';
import { FondService } from '../fond/service/fond.service';
import { TranslateService } from '@ngx-translate/core';
import { ChaletApiService } from './chalet.api.service';
import { Observable, Subscription } from 'rxjs';
import { BreakpointService } from '../breakpoint.service';

@Component({
  selector: 'app-chalet',
  templateUrl: './chalet.component.html',
  styleUrls: ['./chalet.component.scss']
})
export class ChaletComponent implements OnInit, OnDestroy {

  chalet$: Observable<Chalet>;

  chaletLoaded: Promise<boolean>;

  constructor(
      public breakpointService: BreakpointService,
      public diaporamaService: DiaporamaService,
      private fondService: FondService,
      public translateService: TranslateService,
      private chaletApiService: ChaletApiService
    ) {

   }

  ngOnInit(): void {
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
  }

}
