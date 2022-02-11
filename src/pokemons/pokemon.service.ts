import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokedexApiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(private http: HttpClient,) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.pokedexApiUrl+'/pokemons?limit=151');
  }

  getPokemonDescription(pokemonId: number): Observable<any> {
    return this.http.get<any>(this.pokedexApiUrl+'/pokemons/'+pokemonId);
  }
}
