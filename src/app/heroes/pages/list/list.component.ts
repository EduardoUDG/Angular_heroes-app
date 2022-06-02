import { Hero } from './../../interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
      this.heroesService.getHeroes()
        .subscribe({
          next: ( heroes:Hero[] )=> this.heroes = heroes
        });
  }
}
