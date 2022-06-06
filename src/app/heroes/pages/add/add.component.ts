import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {

  publushers = [
    {
      id: 'Dc Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel  - Comics'
    }
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  constructor(
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {
  }

  saveHero() {
    if( this.hero.superhero.trim().length === 0 ) {
      return;
    }
    this._heroesService.createHero( this.hero )
      .subscribe({
        next: ( response ) => console.log( response )
      })
  }

}
