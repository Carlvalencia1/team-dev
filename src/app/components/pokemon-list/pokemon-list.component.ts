import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    const pokemonNames = ['ditto', 'pikachu', 'charizard', 'bulbasaur', 'squirtle']; // Lista de Pokémon a mostrar
    pokemonNames.forEach((name) => {
      this.pokemonService.getPokemon(name).subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
    });
  }
}
