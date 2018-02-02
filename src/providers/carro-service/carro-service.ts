import {  Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Icarro } from '../interfaces/icarro';
/*
  Generated class for the CarroServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarroServiceProvider {
  public urlCarros = 'http://127.0.0.1:8000/api/carros';
  constructor(public http: Http) {
    console.log('Hello CarroServiceProvider Provider');
  }

  listaCarros():Observable<Icarro[]>{
    return this.http.get(this.urlCarros).map(res => res.json()).catch(this.erro);

  }

  erro(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Serve Erro');

  }

}
