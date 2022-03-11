import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login-service/login.service";
import {AuthTokens} from "../../models/auth-tokens";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-login',
  templateUrl: './pokemon-login.component.html',
  styleUrls: ['./pokemon-login.component.scss']
})
export class PokemonLoginComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  // passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')]);

  loginFormGroup: FormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.email, Validators.required ]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.min(3) ])
  });

  hidePassword = true;
  tokens: AuthTokens = { access_token: '', refresh_token: '', expires_in: 0};
  loginErrorMsg = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.loginService.login(this.loginFormGroup.value.emailFormControl, this.loginFormGroup.value.passwordFormControl).subscribe( res => {
      this.tokens = res;
      this.loginErrorMsg = false;
      localStorage.setItem('access_token',this.tokens.access_token);
      this.router.navigate(['pokedex']);
      console.log('this.tokens');
      console.log(this.tokens);
    }, error => {
      this.loginErrorMsg = true;
      console.log('error');
      console.log(error);
    });
  }
}
