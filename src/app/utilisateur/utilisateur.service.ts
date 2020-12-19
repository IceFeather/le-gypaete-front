import { Injectable } from "@angular/core";
import { Token } from './model/token';
import { Utilisateur } from './model/utilisateur';

@Injectable()
export class UtilisateurService {

  utilisateur: Utilisateur;
  token: Token;

}
