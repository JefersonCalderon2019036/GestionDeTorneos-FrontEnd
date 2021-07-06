import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/users.models';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsersServices]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuarios;
  public token: any;
  public identidad: any;
  public rol: any;

  constructor(
    private _usuarioService: UsersServices,
    private _router: Router
  ) {
    this.usuarioModel = new Usuarios("","","","","","","","", [{type: ""}]);
  }

  ngOnInit(): void {
  }

  getToken() {
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response) => {
        this.token = response.token;
        this.identidad = response.user;
        localStorage.setItem('token', this.token);
        localStorage.setItem('Role', this.identidad.role);
        localStorage.setItem("name", this.identidad.username);
        localStorage.setItem("imperfil", this.identidad.image);
        localStorage.setItem("id", this.identidad._id);
        this._router.navigate(['/principal'])
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  gettoregister(){
    this._router.navigate(['/toregister'])
  }
}
