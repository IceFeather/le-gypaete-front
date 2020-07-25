import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('afficherMasquer', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('contenu') contenu!: ElementRef;

  title = 'Chalet le Gypaete';

  saison = 'hiver';

  isMobile: boolean;
  top: boolean = true;
  bottom: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( bp => this.isMobile = bp.matches );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.contenu.nativeElement.scrollTo(0,0);
      }
    });
  }

  changerSaison(event) {
    if (this.saison === 'été') {
      this.saison = 'hiver';
    } else {
      this.saison = 'été';
    }
    // this.diaporamaFond.reset();
  }

  scroll(event: any) {
    if (event.target.scrollTop === 0) {
      this.top = true;
    } else {
      this.top = false;
    }
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.bottom = true;
    } else {
      this.bottom = false;
    }
  }

}
