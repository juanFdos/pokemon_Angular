import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsePokedex, Pokemon, PokemonResponse } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndPoint = 'https://pokeapi.co/api/v2/pokemon/';
  private limit = 24;

  getPokemon(page: number): Observable<PokemonResponse> {
    let count = page === 0 ? 1 : page * this.limit + 1;
    return this.http.get(`${this.urlEndPoint}?offset=${count - 1}&limit=${this.limit}`).pipe(
      map((response: any) => {

        const pokemons = new Array<Array<Pokemon>>();
        const pages = (response as ResponsePokedex).count / this.limit;
        const data = { pages, currentPage: page };
        let rowPokemon = new Array<Pokemon>();
        (response as ResponsePokedex).results.forEach((value) => {
          rowPokemon.push({ id: count.toString(), name: value.name, url: value.url });
          if (count > 2 && (count % 3 === 0 || count % 3 === 3)) {
            pokemons.push(rowPokemon);
            rowPokemon = [];
          }
          count += 1;
        });
        return { pokemons, data };
      })
    );

  }
  constructor(private http: HttpClient) { }
}
