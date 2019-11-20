import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // https://pokeapi.co/api/v2/pokemon/

  getPokemon(): Observable<Array<Pokemon>> {
    const pokemons = new Array<Pokemon>();
    pokemons.push({ id: '4', name: 'charmander', url: 'fasdfa' });
    pokemons.push({ id: '25', name: 'pikachu', url: 'fasdfa' });
    pokemons.push({ id: '54', name: 'psyduck', url: 'fasdfa' });
    return of(pokemons);
  }
  constructor() { }
}
