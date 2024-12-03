import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.pokemonService.getPokemons(this.pokemonListUrl).subscribe((response) => {
      const pokemonUrls = response.results.map((result) => result.url);
      pokemonUrls.forEach((url) => {
        this.pokemonService.getPokemonByUrl(url).subscribe((pokemon) => {
          this.pokemons.push(pokemon);
        });
      });
    });
  }
}
