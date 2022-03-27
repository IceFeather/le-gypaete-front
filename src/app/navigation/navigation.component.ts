import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UtilisateurApiService } from '../utilisateur/utilisateur.api.service';
import { BreakpointService } from '../breakpoint.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  langue = 'fr';

  isMobile: boolean = this.breakpointService.isMobile;

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
    public translateService: TranslateService,
    public dialog: MatDialog,
    public utilisateurApiService: UtilisateurApiService,
    public breakpointService: BreakpointService
  ) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
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
