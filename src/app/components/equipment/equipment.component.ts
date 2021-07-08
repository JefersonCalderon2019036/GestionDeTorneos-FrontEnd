import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teams } from 'src/app/models/teams.models';
import { TeamsServices } from 'src/app/services/teams.services';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  providers: [TeamsServices]
})
export class EquipmentComponent implements OnInit {
  teams: any;
  TeamsModel: any;

  constructor(
    private _TeamsServices: TeamsServices,
    private _router: Router
  ) { this.TeamsModel = new teams("","","","",0,0,0,0,0);}

  ngOnInit(): void {
    this.ObtenerUnTeam()
  }

  ObtenerUnTeam(){
    this._TeamsServices.GetTeamsId().subscribe(
      response => {
        console.log(response)
        this.teams = response
      }, error => {
        console.log(<any>error)
      }
    )
  }

  DeleteUnTeam(){
    this._TeamsServices.DeleteUnTemas().subscribe(
      response => {
        console.log(response)
        this._router.navigate(['/ligas'])
      }, error => {
        console.log(<any>error)
      }
    )
  }

  ActualizarTeam(){
    this._TeamsServices.UpdateUnTeams(this.TeamsModel).subscribe(
      response => {
        console.log(response)
        this.ObtenerUnTeam();
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
