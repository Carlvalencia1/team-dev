// src/app/services/pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { map } from 'rxjs/operators'; // Asegúrate de importar 'map' aquí

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  // Método para obtener un Pokémon por su nombre
  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}${name}`).pipe(
      map((response) => new Pokemon(response)) // Convertimos la respuesta en un objeto Pokemon
    );
  }
}
