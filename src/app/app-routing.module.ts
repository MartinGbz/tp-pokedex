import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailComponent} from "../pokemons/pokemon-detail/pokemon-detail.component";
import {PokemonListComponent} from "../pokemons/pokemon-list/pokemon-list.component";
import {PokedexComponent} from "../pokemons/pokedex/pokedex.component";

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokedex', component: PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
