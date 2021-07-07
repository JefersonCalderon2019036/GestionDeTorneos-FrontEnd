import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsServices } from 'src/app/services/teams.services';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  providers: [TeamsServices]
})
export class EquipmentComponent implements OnInit {
  teams: any;

  constructor(
    private _TeamsServices: TeamsServices,
    private _router: Router
  ) { }

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
}
