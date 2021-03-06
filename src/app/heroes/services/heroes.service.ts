import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Hero } from './../interfaces/hero.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _BASE_URL = environment.BASE_URL;
  constructor( private http: HttpClient ) { }

  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this._BASE_URL}/heroes`);
  }

  getHeroById( id:string ):Observable<Hero> {
    return this.http.get<Hero>(`${this._BASE_URL}/heroes/${ id }`);
  }

  getSuggestions( term: string ):Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this._BASE_URL}/heroes?q=${ term }&_limit=6`);
  }

  createHero( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>(`${this._BASE_URL}/heroes`, hero);
  }

  updateHero( hero: Hero ):Observable<Hero> {
    return this.http.put<Hero>(`${this._BASE_URL}/heroes/${ hero.id }`, hero );
  }

  deleteHero( id: string ):Observable<any> {
    return this.http.delete<any>(`${this._BASE_URL}/heroes/${ id }`);
  }

}
