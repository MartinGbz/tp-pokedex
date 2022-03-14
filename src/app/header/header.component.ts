import {
  AfterContentChecked,
  Component,
  OnInit
} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  refreshToken = localStorage.getItem('refresh_token');
  index = 0;

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.refreshToken = localStorage.getItem('refresh_token');
    if(this.router.url == '/pokedex'){
      this.index = 0;
    }
    else if(this.router.url == '/team') {
      this.index = 1;
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

  clearAuthLocalStorage(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('token_type');
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.clearAuthLocalStorage();
    this.refreshToken = '';
  }
}
