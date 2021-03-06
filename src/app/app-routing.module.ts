import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailComponent} from "../pokemons/pokemon-detail/pokemon-detail.component";
import {PokemonListComponent} from "../pokemons/pokemon-list/pokemon-list.component";
import {PokedexComponent} from "../pokemons/pokedex/pokedex.component";
import {PokemonLoginComponent} from "../pokemons/pokemon-login/pokemon-login.component";
import {PokemonTeamComponent} from "../pokemons/pokemon-team/pokemon-team.component";

const routes: Routes = [
  // { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'login', component: PokemonLoginComponent },
  { path: 'team', component: PokemonTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
