import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ligas } from 'src/app/models/ligas.models';
import { teams } from 'src/app/models/teams.models';
import { LigasServices } from 'src/app/services/ligas.services';
import { TeamsServices } from 'src/app/services/teams.services';
import { UsersServices } from 'src/app/services/users.services';
import { MarcadorServices } from 'src/app/services/marcador.services';
import { marcador } from 'src/app/models/marcador.model';
import { jsPDF } from "jspdf";
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss'],
  providers: [UsersServices, LigasServices, TeamsServices, MarcadorServices]
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
  MarcadorModel: marcador;
  jornadasligas: any;
  jornadas: any;

  constructor(
    public _usuarioService: UsersServices,
    public _LigasServices: LigasServices,
    public _TeamsServices: TeamsServices,
    public _MarcadorServices: MarcadorServices,
    private _router: Router
  ) {
    this.rol = this._usuarioService.getRol();
    this.LigasModel = new ligas("","","",0, [{type: ""}]);
    this.TeamsModel = new teams("","","","",0,0,0,0,0);
    this.MarcadorModel = new marcador(0,0,0,"","",[{type: ""}],[{type: ""}],[{type: ""}]);
    this.rol = this._usuarioService.getRol();
   }

  ngOnInit(): void {
    this.ObtenerDatosDeLiga();
    this.ObtenerDatosTable();
    this.verificacion();
    this.VerTabla();
    this.ObtenerJornadasPorLIga();
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
        this.ObtenerJornadasPorLIga()
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

  DeleteLiga(){
    if("ROLE_ADMIN" == this.rol){
      this._LigasServices.DeleteLigaIdAdmin().subscribe(
        response => {
          console.log(response)
          this._router.navigate(['/suspenders'])
        }, error => {
          console.log(<any>error)
        }
      )
    }else {
      this._LigasServices.DeleteLigaUserId().subscribe(
        response => {
          console.log(response)
          this._router.navigate(['/suspenders'])
        }, error => {
          console.log(<any>error)
        }
      )
    }
  }

  UpdateLigas(){
    if("ROLE_ADMIN" == this.rol){
      this._LigasServices.PutUpdateLidaAdmin(this.LigasModel).subscribe(
        response => {
          console.log(response)
          this.ObtenerDatosDeLiga();
          this.ObtenerDatosTable();
          this.VerTabla();
        }, error => {
          console.log(<any>error)
        }
      )
    }else {
      this._LigasServices.PutUpadateLidaUser(this.LigasModel).subscribe(
        response => {
          console.log(response)
          this.ObtenerDatosDeLiga();
          this.ObtenerDatosTable();
          this.VerTabla();
        }, error => {
          console.log(<any>error)
        }
      )
    }
  }

  undoloequipo(id: any){
    localStorage.setItem('UnSoloEquipo', id)
    this._router.navigate(['/equipment'])
  }

  imprimir(){
    const doc = new jsPDF();
    doc.text('Proyecto angular a torneos', 10,10)
    doc.save("proyecto-angular-torneos.pdf");
  }

  CrearUnaJornada(){
    this._MarcadorServices.CrearJornada(this.MarcadorModel).subscribe(
      response => {
        console.log(response)
        this.ObtenerDatosTable();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  ObtenerJornadasPorLIga(){
    this._MarcadorServices.ObtenerJornadas().subscribe(
      response => {
        console.log(response)
        this.jornadas = response
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
