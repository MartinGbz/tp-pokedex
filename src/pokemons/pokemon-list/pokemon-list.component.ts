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

  @Output()
  pokemonClick: EventEmitter<any> = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(0,10).subscribe(res => {
      this.pokemons = res;
    });
  }

  onScroll(): void {
    this.pokemonService.getPokemons(this.pokemons.offset+10, this.pokemons.limit).subscribe(res => {
      this.pokemons.offset = res.offset;
      this.pokemons.limit = res.limit;
      this.pokemons.data = [...this.pokemons.data, ...res.data];
    });
  }
}
