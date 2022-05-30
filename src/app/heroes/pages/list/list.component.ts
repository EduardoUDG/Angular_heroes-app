import { Heroe } from './../../interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{

  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
      this.heroesService.getHeroes()
        .subscribe({
          next: ( heroes:Heroe[] )=> this.heroes = heroes
        });
  }
}
