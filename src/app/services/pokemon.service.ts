import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { PokemonListResponse } from '../interfaces/pokemon-response.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}
  getPokemons(url: string): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(url);
  }
  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<PokemonResponse>(url).pipe(
      map((response) => new Pokemon(response)) 
    );
  }
  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}${name}`).pipe(
      map((response) => new Pokemon(response))
    );
  }
}
