import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accessToken = localStorage.getItem('access_token')

  constructor(private router: Router) { }

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
}
