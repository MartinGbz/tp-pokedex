import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonId = 1;

  constructor() { }

  ngOnInit(): void {
  }

  pokemonIdChange(id: number): void {
    this.pokemonId = id;
    console.log(this.pokemonId);
  }

}
