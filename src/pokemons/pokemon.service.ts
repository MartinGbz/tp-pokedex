import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PageData} from "../models/page-data";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokedexApiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(private http: HttpClient,) { }

  getPokemon(): Observable<PageData<Pokemon>> {
    return this.http.get<any>(this.pokedexApiUrl+'/pokemons');
  }

  getPokemons(offset: number, limit: number): Observable<PageData<Pokemon>> {
    return this.http.get<any>(this.pokedexApiUrl+'/pokemons?offset='+offset+'&limit='+limit);
  }

  getPokemonDescription(pokemonId: number): Observable<any> {
    return this.http.get<any>(this.pokedexApiUrl+'/pokemons/'+pokemonId);
  }
}
