import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ligas } from 'src/app/models/ligas.models';
import { LigasServices } from 'src/app/services/ligas.services';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-suspenders',
  templateUrl: './suspenders.component.html',
  styleUrls: ['./suspenders.component.scss'],
  providers: [UsersServices, LigasServices]
})
export class SuspendersComponent implements OnInit {
  rol: any;
  LigasModel: any;
  ligas: any;

  constructor(
    public _usuarioService: UsersServices,
    public _LigasServices: LigasServices,
    private _router: Router)
    {
      this.rol = this._usuarioService.getRol();
      this.LigasModel = new ligas("","","",0, [{type: ""}]);
    }

  ngOnInit(): void {
    this.ObeternLigas();
  }

  /* Obtener todas las ligas */
  ObeternLigas(){
    this._LigasServices.getLiga().subscribe(
      response => {
        this.ligas = response
        console.log(this.LigasModel)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  AgregarUnaLiga(){
    this._LigasServices.PostCreateLiga(this.LigasModel).subscribe(
      repsonse => {
        this.ligas = repsonse
        console.log(repsonse)
        this.ObeternLigas();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  ObtenerUnaSolaLiga(id: string){
    localStorage.setItem('UnaSolaLiga', id);
    this._router.navigate(['/ligas'])
  }
}
