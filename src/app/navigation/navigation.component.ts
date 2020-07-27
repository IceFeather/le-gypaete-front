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
    {nom: {fr: "Accueil", en: "Home", de:"Home"}, icone: "home", lien: ['/accueil']},
    {nom: {fr: "Le chalet", en: "The chalet", de:"The chalet"}, icone: "house", lien: ['/chalet']},
    {nom: {fr: "Les chambres", en: "The rooms", de:"The rooms"}, icone: "king_bed", lien: ['/chambres']},
    {nom: {fr: "Tarifs & prestations", en: "Prices & services", de:"Prices & services"}, icone: "table_chart", lien: ['/tarifs']},
    {nom: {fr: "Réserver", en: "Book", de:"Book"}, icone: "book_online", lien: ['/reserver']},
    {nom: {fr: "Contacter", en: "Contact", de:"Contact"}, icone: "contact_phone", lien: ['/contacter']},
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
