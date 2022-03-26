import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../model/chambre';
import { FondService } from 'src/app/fond/service/fond.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DiaporamaService } from 'src/app/diaporama/service/diaporama.service';
import { CHAMBRES } from '../mock-chambres';
import { TranslateService } from '@ngx-translate/core';
import { ChambresApiService } from '../chambres.api.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit, OnDestroy {

  numero = 0;

  chambre$: Observable<Chambre>;

  isMobile: boolean;

  private _breakpointSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public fondService: FondService,
    public diaporamaService: DiaporamaService,
    public translateService: TranslateService,
    private chambresApiService: ChambresApiService
  ) {

  }



  ngOnInit(): void {

    this._breakpointSubscription = this.breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small
    ]).subscribe(
      bp => this.isMobile = bp.matches
    );

    if (history.state.chambre != null) {
      this.chambre$ = of(history.state.chambre);
    } else {
      this.route.paramMap.subscribe(
        params => {
          let numero = Number(params.get('numero'));
          this.chambre$ = this.chambresApiService.recupererAvecNumero(numero);
        }
      ).unsubscribe();
    }

    this.initFond();

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
    this.chambre$.subscribe(
      chambre => {
        if (chambre.images.length > 0) {
          this.fondService.images = chambre.images;
          this.fondService.debut();
        }
        this.diaporamaService.images = chambre.images;
        this.diaporamaService.debut();
      }
    );
  }

  ngOnDestroy(): void {
    this.diaporamaService.arreter();
    this.fondService.arreter();
    this._breakpointSubscription.unsubscribe();
  }

}
