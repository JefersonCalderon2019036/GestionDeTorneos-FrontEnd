import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBALSERVICIOS } from './global.services';
import { marcador } from '../models/marcador.model';

@Injectable({
  providedIn: 'root'
})
export class MarcadorServices {
  public url: String;
  public token: any;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json');
  public headersToken = this.Encabezado.set('Authorization', this.getToken());
  public identidad: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBALSERVICIOS.url;
  }

  //funcion para crear una jornada
  CrearJornada(marcadordatos: marcador): Observable<any>{
    let params = JSON.stringify(marcadordatos)
    return this._http.put(this.url + "setMarcador/"+this.getSoloUnaLiga(), params, {headers: this.headersToken})
  }

  //funcion para obtener todas las jornadas
  ObtenerJornadas(): Observable<any>{
    return this._http.get(this.url+"getMarcadoresLiga/"+this.getSoloUnaLiga(), {headers: this.headersToken})
  }

  //funcion para obtener el token desde el localStorage
  getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  // funcion para obtener el id del usuario logeado
  getId(){
    var identidad2 = localStorage.getItem('id');
    if(identidad2 != 'undefined'){
      this.identidad = identidad2
    }else{
      this.identidad = null;
    }
    return this.identidad;
  }

  // funcion para obtener el id del usuario logeado
  getSoloUnaLiga(){
    var identidad2 = localStorage.getItem('UnaSolaLiga');
    if(identidad2 != 'undefined'){
      this.identidad = identidad2
    }else{
      this.identidad = null;
    }
    return this.identidad;
  }
}
