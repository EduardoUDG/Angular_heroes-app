import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 10px;
    }
  `]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
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
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBar : MatSnackBar,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {

    if( !this._router.url.includes('edit') ) {
      return;
    }
    this._activatedRoute.params
      .pipe(
        switchMap( ({id}) => this._heroesService.getHeroById(id) )
      )
      .subscribe( (hero) => this.hero = hero)
  }

  saveHero() {
    if( this.hero.superhero.trim().length === 0 )
    { return; }

    if( this.hero.id ) {
      // update
      this._heroesService.updateHero( this.hero )
        .subscribe( (hero) => this.showSnackBar('Hero updated'));
    } else {
      // create
      this._heroesService.createHero( this.hero )
        .subscribe({
          next: ( hero ) => {
            this._router.navigate(['/heroes/edit', hero.id]);
            this.showSnackBar('Hero created');
          }
        })
    }
  }

  deleteHero() {
    this._dialog.open( ConfirmDialogComponent, {
      width: '250px'
    })

    // this._heroesService.deleteHero( this.hero.id! )
    //   .subscribe({
    //     next: () => {
    //       this._router.navigate(['/heroes'])
    //     }
    //   })
  }

  showSnackBar( msg: string ):void {
    this._snackBar.open( msg, 'ok!', {
      duration: 2500
    });
  }

}
