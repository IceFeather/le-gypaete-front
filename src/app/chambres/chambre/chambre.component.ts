import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Lit } from '../model/lit';
import { Chambre } from '../model/chambre';
import { FondService } from 'src/app/fond/service/fond.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DiaporamaService } from 'src/app/diaporama/service/diaporama.service';
import { MosaiqueComponent } from '../mosaique/mosaique.component';
import { CHAMBRES } from '../mock-chambres';
import { TranslateService } from '@ngx-translate/core';
import { ChambresApiService } from '../chambres.api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit, OnDestroy {

  numero = 0;

  chambre: Chambre;

  isMobile: boolean;

  fileToUpload: File = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public fondService: FondService,
    public diaporamaService: DiaporamaService,
    public translateService: TranslateService,
    private chambresApiService: ChambresApiService
  ) {

    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small
    ]).subscribe(
      bp => this.isMobile = bp.matches
    );

  }



  ngOnInit(): void {

    if (!this.chambre) {
      this.chambre = history.state.chambre;
    }

    if (!this.chambre) {
      this.route.paramMap.subscribe(
        params => {
          let numero = Number(params.get('numero'));
          this.chambresApiService.recupererAvecNumero(numero).subscribe(chambre => {
            this.chambre = chambre;
            this.initFond();
          })
        }
      )
    }

    if (this.chambre) this.initFond();

/*
    this.route.paramMap.subscribe(
      params => {
        // this.chambre = this.chambres[Number(params.get('numero'))-1];
        this.chambresApiService.recupererAvecNumero(params.get('numero')).subscribe(
          (chambre: Chambre) => {
            this.chambre = chambre;
            if (this.chambre.images.length > 0) {
              this.fondService.images = this.chambre.images;
              this.fondService.debut();
            }
            this.diaporamaService.images = this.chambre.images;
            this.diaporamaService.debut();
          },
          error => this.router.navigate(['../'], { relativeTo: this.route })
        )
      }
    );
*/
  }

  initFond(): void {
    if (this.chambre.images.length > 0) {
      this.fondService.images = this.chambre.images;
      this.fondService.debut();
    }
    this.diaporamaService.images = this.chambre.images;
    this.diaporamaService.debut();
  }

  ngOnDestroy(): void {
    this.diaporamaService.arreter();
    this.fondService.arreter();
  }

}
