// src/app/models/pokemon.model.ts
export class Pokemon {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
    types: { type: { name: string } }[];
  
    constructor(pokemonResponse: any) {
      this.name = pokemonResponse.name;
      this.id = pokemonResponse.id;
      this.sprites = pokemonResponse.sprites;
      this.types = pokemonResponse.types;
    }
  }
  