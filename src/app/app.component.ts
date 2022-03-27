import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { version } from '../../package.json';
import { BreakpointService } from './breakpoint.service';

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
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('contenu') contenu!: ElementRef;
  @ViewChild('basDePage') basDePage!: ElementRef;

  public version: string = version;

  title = 'Chalet le Gypaete';

  public date: Date = new Date();

  public saison = this.getSaison(this.date);

  intersectionObserver: IntersectionObserver;
  top: boolean;
  bottom: boolean;

  constructor(
    public breakpointService: BreakpointService,
    private router: Router,
    public translateService: TranslateService,
  ) {
    translateService.setDefaultLang('fr');
    translateService.use(translateService.getBrowserLang());
  }

  ngOnInit() {
    this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.bottom = true;
        observer.unobserve(entries[0].target);
      }
    }, {threshold: [0]});

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.contenu.nativeElement.scrollTo(0,0);
      }
    })

  }

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
    console.log("top/bottom check disconnected");
  }

  ngAfterViewChecked() {
    // this.router.events.subscribe((evt) => {
    //   if (evt instanceof NavigationEnd) {
    //     console.log("scrollto 0/0");
    //     this.contenu.nativeElement.scrollTo(0,0);
    //     this.top = true;
    //     this.bottom = false;
    //     setTimeout(() => this.intersectionObserver.observe(this.basDePage.nativeElement), 50);
    //   }
    // });
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
    this.logTopBottom();
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

  getSaison(date: Date) {
    if (date.getMonth() > 5 && date.getMonth() < 10) {
      return 'ete';
    } else {
      return 'hiver';
    }
  }

}
