import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/users.models';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersServices]
})
export class UsersComponent implements OnInit {

  public usuarioModel: Usuarios;
  public token: any;
  usuariostable: any;
  idusuarioModel: any;
  idUsuarioModel: any;
  SoloUnUsuarioId: any;
  UsuarioModel2: Usuarios;

  constructor(
    private _usuarioService: UsersServices,
  ) {
    this.usuarioModel = new Usuarios("","","","","","","","", [{type: ""}]);
    this.UsuarioModel2 = new Usuarios("","","","","","","","", [{type: ""}]);
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  //funcion para obtener todos los usuarios
  obtenerUsuarios(){
    this._usuarioService.getUsers().subscribe(
      (response) => {
        this.usuariostable = response;
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  //funcion para eliminar un usuario a traves de su id
  DeleteUsuarioId(id: any){
    localStorage.setItem("SoloUnUsuario", id)
    this._usuarioService.DeleteUsuarioId().subscribe(
      response => {
        console.log(response)
        this.obtenerUsuarios();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //funcion para ver un usuario a traves de su id
  GetUsuarioId(id: any){
    localStorage.setItem("SoloUnUsuario", id)
    this._usuarioService.GerUsersId().subscribe(
      response => {
        this.UsuarioModel2 = response
      }, error => {
        console.log(<any>error)
      }
    )
  }
}

