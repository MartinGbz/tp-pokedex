import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login-service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('access_token')) {
      this.router.navigate(['login']);
    }
  }

}
