import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/users.models';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsersServices]
})
export class PerfilComponent implements OnInit {
  public usuarioModel: any;
  public UsuarioModel2: any;
  public rol: any;


  constructor(private _usuarioService: UsersServices) {
    this.usuarioModel = new Usuarios("","","","","","","","", [{type: ""}]);
    this.UsuarioModel2 = new Usuarios("","","","","","","","", [{type: ""}]);
    this.rol = this._usuarioService.getRol();
   }

  ngOnInit(): void {
    this.obtenerusuario();
  }

  obtenerusuario(){
    this._usuarioService.GerUsersId2().subscribe(
      response => {
        this.UsuarioModel2 = response;
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
