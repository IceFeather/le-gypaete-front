import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Chalet le Gypaete';

  saison = 'hiver';

  isMobile: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( bp => this.isMobile = bp.matches );
  }

  ngOnInit(): void {
  }

  changerSaison(event) {
    if (this.saison === 'été') {
      this.saison = 'hiver';
    } else {
      this.saison = 'été';
    }
    // this.diaporamaFond.reset();
  }

}
