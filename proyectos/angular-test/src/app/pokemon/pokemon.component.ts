import { Pokemon } from './pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemonList: Array<Pokemon>;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe(
      pokemons => this.pokemonList = pokemons
    );

  }

}
