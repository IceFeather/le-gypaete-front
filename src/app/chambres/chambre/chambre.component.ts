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

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit, OnDestroy {

  numero = 0;

  chambre: Chambre;

  chambres = CHAMBRES;

  isMobile: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public fondService: FondService,
    public diaporamaService: DiaporamaService,
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Small
    ]).subscribe(
      bp => this.isMobile = bp.matches
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.chambre = this.chambres[Number(params.get('numero'))-1];
        if (this.chambre == null) {
          this.router.navigate(['../'], { relativeTo: this.route });
        }
        this.fondService.images = this.chambre.images;
        this.fondService.debut();

        this.diaporamaService.images = this.chambre.images;
        this.diaporamaService.interval = 5000;
        this.diaporamaService.debut();
      }
    );
  }

  ngOnDestroy(): void {
    this.diaporamaService.arreter();
    this.fondService.arreter();
  }

}
