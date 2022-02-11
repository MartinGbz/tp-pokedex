import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonId = 0;
  pokemonDetails: any;
  pokemonImgSrc = '';

  constructor(private activatedroute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonId = Number(this.activatedroute.snapshot.paramMap.get("id"));
    this.pokemonService.getPokemonDescription(this.pokemonId).subscribe(res => {
      this.pokemonDetails = res;
      this.pokemonImgSrc = `assets/assets/img/official-artwork/${this.pokemonDetails.id}.png`;
      console.log(this.pokemonImgSrc);
      console.log(this.pokemonDetails);
    });
  }

}
