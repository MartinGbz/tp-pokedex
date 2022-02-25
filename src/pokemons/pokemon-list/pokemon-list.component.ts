import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PageData} from "../../models/page-data";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: PageData<Pokemon> = {data: [], limit: 0, offset: 0};
  nbPokemonsToLoad = 15;
  curPokemonNameSearched = '';

  @Output()
  pokemonClick: EventEmitter<any> = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(0, this.nbPokemonsToLoad).subscribe(res => {
      this.pokemons = res;
    });
  }

  onScroll(): void {
    if(this.curPokemonNameSearched == ''){
      this.pokemonService.getPokemons(this.pokemons.offset+this.nbPokemonsToLoad, this.pokemons.limit).subscribe(res => {
        this.pokemons.offset = res.offset;
        this.pokemons.limit = res.limit;
        this.pokemons.data = [...this.pokemons.data, ...res.data];
      });
    }
    else {
      this.pokemonService.getPokemonSearch(this.curPokemonNameSearched,this.pokemons.offset+this.nbPokemonsToLoad, this.pokemons.limit).subscribe(res => {
        this.pokemons.offset = res.offset;
        this.pokemons.limit = res.limit;
        this.pokemons.data = [...this.pokemons.data, ...res.data];
      })
    }
  }

  test(e: any) {
    this.pokemons.offset = 0;
    this.pokemons.limit = 0;
    if(this.curPokemonNameSearched == '') {
      this.pokemonService.getPokemons(0, this.nbPokemonsToLoad).subscribe(res => {
        this.pokemons = res;
      });
    }
    else {
      this.pokemonService.getPokemonSearch(e,0, this.nbPokemonsToLoad).subscribe(res => {
        this.pokemons = res;
      });
    }
  }
}
