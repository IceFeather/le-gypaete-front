import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Token } from './model/token';
import { Utilisateur } from './model/utilisateur';

@Injectable()
export class UtilisateurApiService {

  path = environment.apiUrl + '/utilisateur';

  utilisateur: Utilisateur;
  token: Token;

  constructor(
    private http: HttpClient,
  ) {}

  inscrire(utilisateur: Utilisateur) {
    return this.http.put(this.path + '/inscription', utilisateur);
  }

  recupererMoi(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.path + '/moi', {
      headers: {
        "Utilisateur": this.token.id,
        "Authorization": 'Bearer ' + this.token.token
      }
    });
  }

  connecter(email: string, motdepasse: string) {
    return new Promise((resolve, rejects) => {
      this.http.post<Token>(this.path + '/connexion', {'email': email, 'motdepasse': motdepasse}).subscribe(
        token => {
          this.token = token;
          this.recupererMoi().subscribe(
            utilisateur => {
              this.utilisateur = utilisateur;
              resolve(utilisateur);
            },
            error => rejects(error)
        )},
        error => rejects(error)
      )
    });
  }

  deconnecter() {
    delete this.token;
    delete this.utilisateur;
  }

}
