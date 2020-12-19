import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Token } from './model/token';
import { Utilisateur } from './model/utilisateur';
import { UtilisateurService } from './utilisateur.service';

@Injectable()
export class UtilisateurApiService {

  path = environment.apiUrl + '/utilisateur/';

  cache = {
    chambres: null,
  };

  constructor(
    private http: HttpClient,
    private utilisateurService: UtilisateurService
  ) {}

  inscrire(utilisateur: Utilisateur) {
    return this.http.put(this.path + '/inscription', utilisateur);
  }

  recupererMoi(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.path + '/moi', {
      headers: {
        "Utilisateur": this.utilisateurService.token.id,
        "Authorization": 'Bearer ' + this.utilisateurService.token.token
      }
    });
  }

  connecter(email: string, motdepasse: string) {
    this.http.post<Token>(this.path + '/connexion', {'email': email, 'motdepasse': motdepasse})
    ;
  }


}
