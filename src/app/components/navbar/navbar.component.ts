import { Component, OnInit } from '@angular/core';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsersServices]
})
export class NavbarComponent implements OnInit {
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

  cerrarsecion(){
    localStorage.setItem('name',"")
    localStorage.setItem('Role',"")
    localStorage.setItem('UnSoloEquipo',"")
    localStorage.setItem('UnaSolaLiga',"")
    localStorage.setItem('id',"")
    localStorage.setItem('SoloUnUsuario',"")
    localStorage.setItem('imperfil',"")
    localStorage.setItem('token',"")
  }
}
