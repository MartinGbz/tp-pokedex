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
      this.router.navigate(['/login']);
    }
    else {
      this.teamService.getTeam().subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
        console.log(err.status);
        switch (err.status) {
          // Unauthorized
          case 401:
            this.getNewAccessToken();
            // try to get team again with new access token
            this.teamService.getTeam().subscribe(res => {
              console.log(res);
            });
            break;
        }
      })
    }
  }

  getNewAccessToken(): void {
    console.log('getNewAccessToken');
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
        }, err => {
          console.log('refresh err');
          console.log(err);
          switch (err.status) {
            // Unauthorized
            case 401:
              console.log('heeeeere');
              // refresh token invalid go to login
              this.router.navigate(['/login']);
              break;
          }
        }
      )
    }
  }

}
