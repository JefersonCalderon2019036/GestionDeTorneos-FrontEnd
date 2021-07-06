import { Component, OnInit } from '@angular/core';
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

  constructor(
    public _usuarioService: UsersServices,
    public _LigasServices: LigasServices)

    { this.rol = this._usuarioService.getRol();
      this.LigasModel = new ligas("","","",0, [{type: ""}])
    }

  ngOnInit(): void {
    this.ObeternLigas();
  }

  ObeternLigas(){
    if("ROLE_ADMIN" == this.rol){
      this._LigasServices.getLiga().subscribe(
        response => {
          this.LigasModel = response
          console.log(this.LigasModel)
        }, error => {
          console.log(<any>error)
        }
      )
    }else{
      console.log("rol usuario")
    }
  }
}
