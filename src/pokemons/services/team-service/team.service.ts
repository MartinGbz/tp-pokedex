import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {Pokemon} from "../../../models/pokemon";
import {environment} from "../../../environments/environment";
import {PokemonService} from "../pokemon-service/pokemon.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient, private pokemonService: PokemonService) { }

  getTeam(): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') };
    return this.http.get<any>(environment.pokedexApiUrl+'/trainers/me/team', {headers})
      .pipe(switchMap((data) => this.getTeamObservable(data)));
  }

  getTeamObservable(pokemonTeam : number[]) : Observable<Pokemon[]>{
    const newPokemonTeam: Observable<Pokemon>[] = pokemonTeam.map(id => this.pokemonService.getPokemonDescription(id))
    return forkJoin(newPokemonTeam);
  }

  putTeam(pokemonsTeam: number[]): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') };
    return this.http.put<any>(environment.pokedexApiUrl+'/trainers/me/team', pokemonsTeam, {headers});
  }
}
