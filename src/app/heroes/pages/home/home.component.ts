import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HomeComponent {

  constructor(
    private _router: Router
  ) { }

  logout():void {
    this._router.navigate(['/auth'])
  }

}
