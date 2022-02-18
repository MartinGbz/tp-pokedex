import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from "@angular/material/list";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatIconModule} from "@angular/material/icon";
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent,
        PokedexComponent
    ],
    exports: [
        PokemonListComponent
    ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class PokemonsModule { }
