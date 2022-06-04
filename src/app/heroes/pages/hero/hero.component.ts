import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 10px;
    }
  `]
})
export class HeroComponent implements OnInit {

  hero!: Hero;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this._heroService.getHeroById( id ) )
    )
    .subscribe({
      next: ( hero: Hero ) => {
        this.hero = hero;
      }
    })
  }

  toBack():void {
    this._router.navigate(['/heroes/list']);
  }

}
