import { Component, OnInit } from '@angular/core';
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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(res => {
      this.pokemons = res;
    });
  }

  onScroll(): void {
    console.log('scrolled');
  }
}
