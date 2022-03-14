import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login-service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-login',
  templateUrl: './pokemon-login.component.html',
  styleUrls: ['./pokemon-login.component.scss']
})
export class PokemonLoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.email, Validators.required ]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.min(3) ])
  });

  hidePassword = true;
  loginErrorMsg = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {}

  submit() {
    this.loginService.login(this.loginFormGroup.value.emailFormControl, this.loginFormGroup.value.passwordFormControl).subscribe( res => {
      this.loginErrorMsg = false;
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('expires_in', res.expires_in.toString());
      localStorage.setItem('refresh_token', res.refresh_token);
      this.router.navigate(['pokedex']);
    }, err => {
      this.loginErrorMsg = true;
      console.log(err);
    });
  }
}
