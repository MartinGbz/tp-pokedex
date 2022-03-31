import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PageData} from "../../../models/page-data";
import {Pokemon} from "../../../models/pokemon";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PageData<Pokemon>> {
    return this.http.get<any>(environment.pokedexApiUrl+'/pokemons');
  }

  getPokemons(offset: number, limit: number): Observable<PageData<Pokemon>> {
    return this.http.get<any>(environment.pokedexApiUrl+'/pokemons?offset='+offset+'&limit='+limit);
  }

  getPokemonDescription(pokemonId: number): Observable<any> {
    return this.http.get<any>(environment.pokedexApiUrl+'/pokemons/'+pokemonId);
  }

  getPokemonSearch(pattern: string, offset: number, limit: number): Observable<PageData<Pokemon>> {
    return this.http.get<any>(environment.pokedexApiUrl+'/pokemons?search='+pattern+'&offset='+offset+'&limit='+limit);
  }
}
