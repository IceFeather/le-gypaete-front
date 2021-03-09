import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Chambre } from './model/chambre';

@Injectable()
export class ChambresApiService {

  path = environment.apiUrl + '/chambre/';

  constructor(private http: HttpClient) {}

  recupererTout() {
    return this.http.get<Chambre[]>(this.path);
  }

  recupererAvecNumero(numero) {
    return this.http.get<Chambre>(this.path + numero);
  }

}
