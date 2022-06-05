import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  termino:string = '';
  heroes: Hero[] = [];
  heroSelected: Hero | undefined;

  constructor(
    private _heroService: HeroesService
  ) { }

  ngOnInit(): void { }


  searching() {
    this._heroService.getSuggestions( this.termino.trim() )
      .subscribe({
        next: ( heroes ) => this.heroes = heroes
      });
  }


  optionSelected( event: MatAutocompleteSelectedEvent ) {
    if( !event.option.value ) {
      this.heroSelected = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.termino = hero.superhero;
    this._heroService.getHeroById( hero.id! )
      .subscribe({
        next: ( hero ) => this.heroSelected = hero
      })
  }


}
