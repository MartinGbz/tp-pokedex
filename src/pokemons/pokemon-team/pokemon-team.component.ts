import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login-service/login.service";
import {Router} from "@angular/router";
import {TeamService} from "../services/team-service/team.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {

  team: Pokemon[] = [];

  constructor(private loginService: LoginService, private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
    else {
      this.teamService.getTeam().subscribe(res => {
        this.team = res;
        console.log(res);
      }, err => {
        console.log(err);
        switch (err.status) {
          // Unauthorized
          case 401:
            // get new access token with refresh token
            // + try to get team again with this new access token
            this.getNewAccessTokenAndTeam();
            break;
        }
      })
    }
  }

  getNewAccessTokenAndTeam(): void {
    const refreshToken = localStorage.getItem('refresh_token');
    if(!refreshToken) {
      this.router.navigate(['/login']);
    }
    else {
      this.loginService.getAccessToken(refreshToken).subscribe(res => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('expires_in', res.expires_in.toString());
        localStorage.setItem('refresh_token', res.refresh_token);
        localStorage.setItem('token_type', res.token_type);

        this.teamService.getTeam().subscribe(res => {
          console.log('teeeeeeest');
          this.team = res;
        });
        }, err => {
          console.log(err);
          switch (err.status) {
            // Unauthorized
            case 401:
              // refresh token invalid go to login
              this.router.navigate(['/login']);
              break;
          }
        }
      )
    }
  }

}
