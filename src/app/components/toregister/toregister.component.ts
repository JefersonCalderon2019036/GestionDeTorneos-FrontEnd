import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/users.models';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-toregister',
  templateUrl: './toregister.component.html',
  styleUrls: ['./toregister.component.scss'],
  providers: [UsersServices]
})
export class ToregisterComponent implements OnInit {

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

  gettoregister(){
    this._usuarioService.toregister(this.usuarioModel).subscribe(
      (response) => {
        console.log(response)
        this._router.navigate(['/login'])
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

}
