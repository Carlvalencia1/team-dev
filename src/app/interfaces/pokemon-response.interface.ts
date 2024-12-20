export interface PokemonResponse {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  }
  
  
  export interface PokemonListResponse {
    count: number;
    next: string;
    previous: string | null;
    results: { name: string; url: string }[];
  }
    