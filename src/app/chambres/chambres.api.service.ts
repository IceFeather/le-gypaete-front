import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Chambre } from './model/chambre';

@Injectable()
export class ChambresApiService {

  path = environment.apiUrl + "/chambre/";

  cache = {
    chambres: null,
  };

  constructor(private http: HttpClient) {}

  ajouterImage(numero, image) {
    const formData: FormData = new FormData();
    formData.append('fichier', image, image.name);
    return this.http.put(this.path + numero + "/image/", formData);
  }

  recupererTout() {
    return this.http.get<Chambre[]>(this.path);
  }

  recupererAvecNumero(numero) {
    return this.http.get<Chambre>(this.path + numero);
  }

}
