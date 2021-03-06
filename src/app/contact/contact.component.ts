import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Contact } from './model/contact.model';
import { ReseauSocial } from './model/reseaux-sociaux.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isMobile: boolean;

  contacts: Contact[] = [
    {
      type: 'adresse',
      valeur: "880 Route de la Culaz,<br>77450 Le Grand-Bornand,<br>France"
    },
    {
      type: 'téléphone',
      valeur: "+33 6 32 21 84 02"
    },
    {
      type: 'email',
      valeur: 'akacha2@wanadoo.fr'
    }
  ]

  reseauxSociaux: ReseauSocial[] = [
    {
      type: 'facebook',
      lien: 'https://www.facebook.com/Chalet-Le-Gypa%C3%A8te-102370268098440/'
    }
  ]

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
