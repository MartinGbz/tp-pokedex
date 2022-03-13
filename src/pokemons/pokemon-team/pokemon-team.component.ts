import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login-service/login.service";
import {Router} from "@angular/router";
import {TeamService} from "../services/team-service/team.service";

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('access_token')) {
      this.router.navigate(['login']);
    }
    else {
      this.teamService.getTeam().subscribe(res => {
        console.log(res);
      })
    }
  }

}
