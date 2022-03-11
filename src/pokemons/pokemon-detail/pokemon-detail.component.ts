import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../services/pokemon-service/pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  // pokemonId = 0;
  pokemonDetails: any;
  pokemonImgSrc = '';

  @Input()
  pokemonId = 1;

  constructor(private activatedroute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.pokemonId = Number(this.activatedroute.snapshot.paramMap.get("id"));
    console.log(this.pokemonId);
    this.getPokemonDescription();
  }

  getPokemonDescription(): void {
    this.pokemonService.getPokemonDescription(this.pokemonId).subscribe(res => {
      console.log('res');
      console.log(res);
      this.pokemonDetails = res;
      this.pokemonImgSrc = `assets/assets/img/official-artwork/${this.pokemonDetails.id}.png`;
      console.log(this.pokemonImgSrc);
      console.log(this.pokemonDetails);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.pokemonId){
      this.pokemonId = changes.pokemonId.currentValue;
      this.getPokemonDescription();
    }
  }

}
