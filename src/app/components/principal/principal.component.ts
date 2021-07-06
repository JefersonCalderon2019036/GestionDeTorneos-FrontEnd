import { Component, OnInit } from '@angular/core';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  public rol: any;
  public verificaciondelrol: any
  nombres: any;
  imagenp: any;

  constructor(public _usuarioService: UsersServices) {
    this.rol = this._usuarioService.getRol();
    this.nombres = this._usuarioService.getnombre();
    this.imagenp = this._usuarioService.getimagenperfil();
   }

  ngOnInit(): void {
    this.verificacion();
  }

  verificacion(){
    if("ROLE_ADMIN" == this.rol){
      this.verificaciondelrol = true;
    }else{
      this.verificaciondelrol = false;
    }
  }
}
