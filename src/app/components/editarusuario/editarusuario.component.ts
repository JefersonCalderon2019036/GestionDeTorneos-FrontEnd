import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/users.models';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss'],
  providers: [UsersServices]
})
export class EditarusuarioComponent implements OnInit {

  public usuarioModel: Usuarios;
  public token: any;
  usuariostable: any;
  idusuarioModel: any;
  idUsuarioModel: any;
  SoloUnUsuarioId: any;
  UsuarioModel2: Usuarios;
  public rol: any;
  public verificaciondelrol: any

  constructor(
    private _usuarioService: UsersServices,
  ) {
    this.usuarioModel = new Usuarios("","","","","","","","", [{type: ""}]);
    this.UsuarioModel2 = new Usuarios("","","","","","","","", [{type: ""}]);
    this.rol = this._usuarioService.getRol();
  }

  ngOnInit(): void {
    this.obtenerusuario();
    this.verificacion();
  }

  obtenerusuario(){
    this._usuarioService.GerUsersId().subscribe(
      response => {
        this.UsuarioModel2 = response;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  verificacion(){
    if("ROLE_ADMIN" == this.rol){
      this.verificaciondelrol = true;
    }else{
      this.verificaciondelrol = false;
    }
  }

  UpdateUserId(){
    this._usuarioService.UpdateUserId(this.usuarioModel).subscribe(
      Response => {
        console.log(Response)
        this.obtenerusuario();
        this.verificacion();
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
