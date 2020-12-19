import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Chalet } from './model/chalet';

@Injectable()
export class ChaletApiService {

  path = environment.apiUrl + '/chalet';

  constructor(private http: HttpClient){}

  recupererTout() {
    return this.http.get(this.path);
  }

}
