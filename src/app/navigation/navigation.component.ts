import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UtilisateurApiService } from '../utilisateur/utilisateur.api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  langue = 'fr';

  private _breakpointSubscription: Subscription[] = [];
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

  }

  ngOnInit(): void {
    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = true;
        this.isMedium = false;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isMedium = true;
      }
    }));

    this._breakpointSubscription.push(this.breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe( bp => {
      if (bp.matches) {
        this.isMobile = false;
        this.isMedium = false;
      }
    }));
  }

  ngOnDestroy(): void {
    this._breakpointSubscription.forEach((s) => s.unsubscribe());
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
