import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from './model/contact.model';
import { ReseauSocial } from './model/reseaux-sociaux.model';
import { BreakpointService } from '../breakpoint.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

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

  constructor(public breakpointService: BreakpointService) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
