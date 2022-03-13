import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accessToken = localStorage.getItem('access_token')

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  loginLogout() {
    if(this.accessToken){
      localStorage.setItem('access_token', '');
      this.accessToken = localStorage.getItem('access_token');
    }
    else {
      this.router.navigate(['login']);
    }
  }

  navigate(e: any): void {
    if(e.index == 0){
      this.router.navigate(['pokedex']);
    }
    else if(e.index == 1){
      this.router.navigate(['team']);
    }
  }
}
