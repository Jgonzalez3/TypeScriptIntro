import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log('Got Bulbasaur', data), console.log('Ability1:', data['abilities'][0]['ability']['name']);
      const newApi = this._http.get(data['abilities'][0]['ability']['url']);
      newApi.subscribe(newdata => {console.log('All Pokemon with Chlorophyll', newdata['pokemon'].length);
      });
    });
  }
}
