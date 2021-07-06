import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/users.models';
import { GLOBALSERVICIOS } from './global.services';

@Injectable({
    providedIn: 'root'
  })
  export class UsersServices {
    public url: String;
    public token: any;
    public Encabezado = new HttpHeaders().set('Content-Type','application/json');
    public headersToken = this.Encabezado.set('Authorization', this.getToken());
    public identidad: any;

    constructor(public _http: HttpClient) {
        this.url = GLOBALSERVICIOS.url;
    }


    //funcioon para iniciar seccion a un usuario
    login(usuario: Usuarios): Observable<any>{
      let params = JSON.stringify(usuario);
      return this._http.post(this.url + 'login', params, {headers: this.Encabezado});
    }

    //funcion para regitrar un nuevo usuario
    toregister(usuario: Usuarios): Observable<any>{
      let params = JSON.stringify(usuario)
      return this._http.post(this.url +"register", params, {headers: this.Encabezado})
    }

    //funcion para obtener todos los usuarios
    getUsers(): Observable<any>{
      return this._http.get(this.url + 'getUsers', {headers: this.headersToken})
    }


    //funcion para eliminar un usuario por id como administrado
    DeleteUsuarioId(): Observable<any>{
      return this._http.delete(this.url +"deleteUserAdmin/"+ this.getId() + "/"+ this.getSoloUnUsuario(),  {headers: this.headersToken})
    }

    //funcion para eliminar el propio usuarios
    DeleteMyUsuarId(): Observable<any>{
      return this._http.delete(this.url + "deleteUser/" + this.getId(), {headers: this.headersToken})
    }

    //funcion para obtener un usuario por el id
    GerUsersId(): Observable<any>{
      return this._http.get(this.url + "getUsersID/"+this.getSoloUnUsuario(), {headers: this.headersToken})
    }

    //funcion para obtener un usuario por el id
    GerUsersId2(): Observable<any>{
      return this._http.get(this.url + "getUsersID/"+this.getId(), {headers: this.headersToken})
    }

    //funcion para editar un usuario por el id
    UpdateUserId(usuario: Usuarios): Observable<any>{
      let params = JSON.stringify(usuario)
      return this._http.put(this.url +"updateUserAdmin/"+this.getId()+"/"+this.getSoloUnUsuario(), params, {headers: this.headersToken})
    }

    //funcion para edtiar mi propio usuarios
    UpdateMyUserId(usuario: Usuarios): Observable<any>{
      let params = JSON.stringify(usuario)
      return this._http.put(this.url + "updateUser/" +this.getId(), params, {headers: this.headersToken})
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

    //funcion para obtener el tol
    getRol(){
      var identidad2 = localStorage.getItem('Role');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener el nombre del usuario
    getnombre(){
      var identidad2 = localStorage.getItem('name');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener la imagen del usuario
    getimagenperfil(){
      var identidad2 = localStorage.getItem('imperfil');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener el id del usuario
    getId(){
      var identidad2 = localStorage.getItem('id');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion solo un usuarios
    getSoloUnUsuario(){
      var identidad2 = localStorage.getItem('SoloUnUsuario');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }
}
