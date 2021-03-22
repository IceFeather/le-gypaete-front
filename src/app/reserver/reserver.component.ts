import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/model/contact.model';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.scss']
})
export class ReserverComponent implements OnInit {

  contact: Contact = {type: 'téléphone', valeur: "+33 6 32 21 84 02"};

  giteDeFrance = {
    lien: 'https://www.gites-de-france-haute-savoie.com/location-vacances-Gite-Chalet-Le-Gypaete-a-Le-Grand-bornand-en-haute-savoie-74G136189.html#ferme',
    image: '/assets/img/gites-de-france.png'
  }

  isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe( breakpoint => this.isMobile = breakpoint.matches )
  }

  ngOnInit(): void {
  }

}
