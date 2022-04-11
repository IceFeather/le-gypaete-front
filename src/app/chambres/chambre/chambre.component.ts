import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Chambre } from '../model/chambre';
import { FondService } from 'src/app/fond/service/fond.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DiaporamaService } from 'src/app/diaporama/service/diaporama.service';
import { CHAMBRES } from '../mock-chambres';
import { TranslateService } from '@ngx-translate/core';
import { ChambresApiService } from '../chambres.api.service';
import { Observable, of, Subscription } from 'rxjs';
import { BreakpointService } from 'src/app/breakpoint.service';
import { map, switchMap, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit, OnDestroy {

  numero = 0;

  chambre$: Observable<Chambre>;

  constructor(
    private route: ActivatedRoute,
    public breakpointService: BreakpointService,
    public fondService: FondService,
    public diaporamaService: DiaporamaService,
    public translateService: TranslateService,
    private chambresApiService: ChambresApiService
  ) {

  }



  ngOnInit(): void {

    if (history.state.chambre != null) {
      this.chambre$ = of(history.state.chambre);
    } else {
      this.chambre$ = this.route.paramMap.pipe(
        map( (p : ParamMap) => Number(p.get('numero')!)),
        switchMap( n => this.chambresApiService.recupererAvecNumero(n))
      );
    }
    this.initFondEtDiaporama();

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

  initFondEtDiaporama(): void {
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
  }

}
