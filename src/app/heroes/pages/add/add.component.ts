import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {


  constructor( private _activatedRoute: ActivatedRoute  ) {
  }

  ngOnInit(): void {
    this._activatedRoute.params
      .subscribe({
        next: ({ id }) => {
          console.log( id );
        }
      })
  }
}
