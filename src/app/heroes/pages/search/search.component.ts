import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino:string = '';
  heroes: Hero[] = [];

  constructor(
    private _heroService: HeroesService
  ) { }

  ngOnInit(): void { }

  searching() {
    this._heroService.getHeroes()
      .subscribe({
        next: ( heroes ) => this.heroes = heroes
      });
  }

}
