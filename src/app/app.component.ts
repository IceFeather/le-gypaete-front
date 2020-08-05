import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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
  @ViewChild('basDePage') basDePage!: ElementRef;

  title = 'Chalet le Gypaete';

  saison = 'hiver';

  isMobile: boolean;
  top: boolean;
  bottom: boolean;

  intersectionObserver: IntersectionObserver;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private translateService: TranslateService,
  ) {
    translateService.setDefaultLang('fr');
    translateService.use(translateService.getBrowserLang());
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall
    ]).subscribe( bp => this.isMobile = bp.matches );
  }

  ngOnInit() {
    this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.bottom = true;
        observer.unobserve(entries[0].target);
      }
    }, {threshold: [0]});
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.contenu.nativeElement.scrollTo(0,0);
        this.top = true;
        this.bottom = false;
        this.intersectionObserver.observe(this.basDePage.nativeElement);
      }
    });
  }

  logTopBottom() {
    console.log(this.top);
    console.log(this.bottom);
  }

  changerSaison(event) {
    if (this.saison === 'été') {
      this.saison = 'hiver';
    } else {
      this.saison = 'été';
    }
  }

  scroll(event: any) {
    this.checkTopAndBottom(event.target.scrollTop, event.target.scrollHeight, event.target.offsetHeight);
  }

  checkTopAndBottom(scrollTop: number, scrollHeight: number, offsetHeight: number) {
    this.checkTop(scrollTop);
    this.checkBottom(scrollTop, scrollHeight, offsetHeight);
  }


  checkTop(scrollTop: number) {
    if (scrollTop === 0) {
      this.top = true;
    } else {
      this.top = false;
    }
    // console.log('top : ' + this.top);
  }

  checkBottom(scrollTop: number, scrollHeight: number, offsetHeight: number) {
    if (offsetHeight + scrollTop >= scrollHeight) {
      this.bottom = true;
    } else {
      this.bottom = false;
    }
    this.intersectionObserver.observe(this.basDePage.nativeElement);
  }

}
