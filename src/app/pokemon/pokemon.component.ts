import { Pokemon } from './pokemon';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemonList: Array<Array<Pokemon>>;
  public paginator: any;

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.pokemonList = new Array();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page = Number.parseInt(params.get('page'), 10);
      if (!page) {
        page = 0;
      }
      this.pokemonService.getPokemon(page).subscribe(
        PokemonResponse => {
          this.pokemonList = PokemonResponse.pokemons;
          this.paginator = PokemonResponse.data;
        }
      );
    }
    );
  }

}
