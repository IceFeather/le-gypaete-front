import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UtilisateurApiService } from '../utilisateur/utilisateur.api.service';

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
  isMedium: boolean;

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
    public dialog: MatDialog,
    public utilisateurApiService: UtilisateurApiService
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = true;
        this.isMedium = false;
      }
    });

    breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isMedium = true;
      }
    });

    breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isMedium = false;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      minWidth: "50%",
      maxWidth: "90%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
