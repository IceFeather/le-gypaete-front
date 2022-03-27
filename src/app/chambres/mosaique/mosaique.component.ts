import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Chambre } from '../model/chambre';
import { Lit } from '../model/lit';
import { stringify } from 'querystring';
import { CHAMBRES } from '../mock-chambres';
import { ChambresApiService } from '../chambres.api.service';
import { UtilisateurApiService } from 'src/app/utilisateur/utilisateur.api.service';
import { Observable, Subscription } from 'rxjs';
import { BreakpointService } from 'src/app/breakpoint.service';


@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit, OnDestroy {

  chambres$: Observable<Chambre[]>;

  constructor(
    public breakpointService: BreakpointService,
    private chambresApiService: ChambresApiService,
    public utilisateurApiService: UtilisateurApiService) {
    // this.columns = this.columnsDefault;

    this.chambres$ = this.chambresApiService.recupererTout();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
