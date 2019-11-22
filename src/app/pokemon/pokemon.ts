export class PokemonResponse {
    pokemons: Array<Array<Pokemon>>;
    data: {
        pages: number,
        currentPage: number
    };
}

export class Pokemon {
    id: string;
    name: string;
    url: string;
}

export class PokemonResult {
    name: string;
    url: string;
}

export class ResponsePokedex {
    count: number;
    next: string;
    previous: string;
    results: [PokemonResult];
}
