import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBALSERVICIOS } from './global.services';
import { ligas } from '../models/ligas.models'

@Injectable({
  providedIn: 'root'
})
export class LigasServices {
  public url: String;
  public token: any;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json');
  public headersToken = this.Encabezado.set('Authorization', this.getToken());
  public identidad: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBALSERVICIOS.url;
  }

  // funcion para obtener el todas las ligas
  getLiga(): Observable<any>{
    return this._http.get(this.url + "getLiga/"+this.getId(), {headers: this.headersToken})
  }

  // funcion para obtener una ligas
  getlIGAiD(): Observable<any>{
    return this._http.get(this.url + "getlIGAiD/" + this.getSoloUnaLiga(), {headers: this.headersToken})
  }

  DeleteLigaIdAdmin(): Observable<any>{
    return this._http.delete(this.url + "deleteLigaAdmin/" + this.getSoloUnaLiga(), {headers: this.headersToken})
  }

  DeleteLigaUserId(): Observable<any>{
    return this._http.delete(this.url + this.getId()+"/deleteLigaAdmin/" + this.getSoloUnaLiga(), {headers: this.headersToken})
  }
  // funcion para crear una nueva liga
  PostCreateLiga(ligas: any): Observable<any>{
    let params = JSON.stringify(ligas)
    return this._http.post(this.url + "createLiga/"+this.getId(), params, {headers: this.headersToken})
  }

  //funcion para editar una liga
  PutUpdateLidaAdmin(ligas: any): Observable<any>{
    let params = JSON.stringify(ligas)
    return this._http.put(this.url + "updateLigaAdmin/"+this.getSoloUnaLiga(), params, {headers: this.headersToken})
  }

  PutUpadateLidaUser(liga: any): Observable<any>{
    let params = JSON.stringify(ligas)
    return this._http.put(this.url + this.getId() +"/updateLiga/"+this.getSoloUnaLiga(), params, {headers: this.headersToken})
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
