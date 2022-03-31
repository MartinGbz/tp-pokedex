import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthTokens} from "../../../models/auth-tokens";
import {AuthTokensRefresh} from "../../../models/auth-tokens-refresh";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthTokens> {
    const headers = { 'Content-Type': 'application/json' };
    const body = { 'email': email, 'password': password };
    return this.http.post<any>(environment.pokedexApiUrl+'/auth/login', body, {headers});
  }

  getAccessToken(refreshToken: string): Observable<AuthTokensRefresh> {
    const headers = { 'Content-Type': 'application/json' };
    const body = { 'refresh_token': refreshToken };
    return this.http.post<any>(environment.pokedexApiUrl+'/auth/refresh', body, {headers});
  }
}
