import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../services/pokemon-service/pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetails: any;
  pokemonImgSrc = '';

  @Input()
  pokemonId = 1;

  constructor(private activatedroute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonDescription();
  }

  getPokemonDescription(): void {
    this.pokemonService.getPokemonDescription(this.pokemonId).subscribe(res => {
      this.pokemonDetails = res;
      this.pokemonImgSrc = `assets/assets/img/official-artwork/${this.pokemonDetails.id}.png`;
    }, err => {
      console.log(err)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.pokemonId){
      this.pokemonId = changes.pokemonId.currentValue;
      this.getPokemonDescription();
    }
  }

}
