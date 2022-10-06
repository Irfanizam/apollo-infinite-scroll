import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        image
      }
    }
  }
`;

export interface Pokemon {
  id: string;
  name: string;
}

export interface PokemonQuery {
  pokemons: {
    count: number;
    results: Pokemon[];
  };
}
  
 