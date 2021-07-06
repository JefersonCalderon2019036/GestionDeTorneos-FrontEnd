import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBALSERVICIOS } from './global.services';

@Injectable({
  providedIn: 'root'
})
export class LigasServices {
  url: any;
  token: string | null | undefined;
  identidad: string | null | undefined;

  constructor(public _http: HttpClient) {
    this.url = GLOBALSERVICIOS.url;
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

}
