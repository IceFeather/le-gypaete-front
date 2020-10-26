import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  langue = 'fr';

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  isMobile: boolean;

  routes = [
    {nom: "accueil", icone: "home", lien: ['/accueil']},
    {nom: "le chalet", icone: "house", lien: ['/chalet']},
    {nom: "les chambres", icone: "king_bed", lien: ['/chambres']},
    // {nom: "tarifs", icone: "table_chart", lien: ['/tarifs']},
    {nom: "réserver", icone: "book_online", lien: ['/reserver']},
    {nom: "contacter", icone: "contact_phone", lien: ['/contacter']},
  ]

  langues = [

  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    public translateService: TranslateService,
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
