import { Component, OnInit, OnDestroy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chalet } from './model/chalet';
import { CHALET } from './mock-chalet';
import { DiaporamaService } from '../diaporama/service/diaporama.service';
import { FondService } from '../fond/service/fond.service';

@Component({
  selector: 'app-chalet',
  templateUrl: './chalet.component.html',
  styleUrls: ['./chalet.component.scss']
})
export class ChaletComponent implements OnInit, OnDestroy {

  isMobile: boolean;

  chalet: Chalet = CHALET;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private diaporamaService: DiaporamaService,
      private fondService: FondService,
    ) {
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches )
   }

  ngOnInit(): void {
    this.diaporamaService.images = this.chalet.images;
    this.diaporamaService.debut();
    this.fondService.images = this.chalet.images;
    this.fondService.debut();
  }

  ngOnDestroy(): void {
    this.diaporamaService.arreter();
    this.fondService.arreter();
  }

}
