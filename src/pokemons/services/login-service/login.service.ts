import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthTokens} from "../../../models/auth-tokens";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthTokens> {
    const headers = { 'Content-Type': 'application/json' };
    const body = { 'email': email, 'password': password };
    console.log(environment.pokedexApiUrl);
    return this.http.post<any>(environment.pokedexApiUrl+'/auth/login', body, {headers});
  }
}