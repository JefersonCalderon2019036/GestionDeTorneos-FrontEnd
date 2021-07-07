import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ligas } from 'src/app/models/ligas.models';
import { teams } from 'src/app/models/teams.models';
import { LigasServices } from 'src/app/services/ligas.services';
import { TeamsServices } from 'src/app/services/teams.services';
import { UsersServices } from 'src/app/services/users.services';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss'],
  providers: [UsersServices, LigasServices, TeamsServices]
})
export class LigaComponent implements OnInit {
  rol: any;
  LigasModel: any;
  ligas: any;
  teams: any;
  TeamsModel: any;
  verificaciondelrol: boolean | undefined;

  chartOptions = {
    responsive: true,
  };
  chartLabels = ['equipo 1', 'equipo 2', 'equipo 3'];
  chartData = [10,30,40];
  chartColors = [{
    backgroundColor: ['#D32F2F', '#0288D1', '#4CAF50', '#03A9F4', '#00796B', '#8BC34A', '#FFEB3B', '#303F9F', '#3F51B5', '#FF5722', '#9E9E9E'],
  }];
  chartLegend = true;
  chartPlugins = [];
  VerGraficasdato: boolean | undefined;
  vertabladato: boolean | undefined;

  constructor(
    public _usuarioService: UsersServices,
    public _LigasServices: LigasServices,
    public _TeamsServices: TeamsServices,
    private _router: Router
  ) {
    this.rol = this._usuarioService.getRol();
    this.LigasModel = new ligas("","","",0, [{type: ""}]);
    this.TeamsModel = new teams("","","","",0,0,0,0,0);
    this.rol = this._usuarioService.getRol();
   }

  ngOnInit(): void {
    this.ObtenerDatosDeLiga();
    this.ObtenerDatosTable();
    this.verificacion();
    this.VerTabla();
  }

  ObtenerDatosDeLiga(){
    this._LigasServices.getlIGAiD().subscribe(
      repsonse => {
        this.ligas = repsonse
        console.log(repsonse)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  ObtenerDatosTable(){
    this._TeamsServices.GetTeams().subscribe(
      response => {
        this.teams = response.teams.teams
      }, error => {
        console.log(<any>error)
      }
    )
  }  

  CrearUnNuevoTeams(){
    this._TeamsServices.AgregarUnTeams(this.TeamsModel).subscribe(
      response => {
        console.log(response)
        this.ObtenerDatosTable()
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

  VerGraficas(){
    this.VerGraficasdato = true;
    this.vertabladato = false;
  }

  VerTabla(){
    this.VerGraficasdato = false;
    this.vertabladato = true;
  }
}
