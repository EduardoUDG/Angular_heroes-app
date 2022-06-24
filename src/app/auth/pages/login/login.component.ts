import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }


  login():void {
    this._authService.login()
      .subscribe({
        next: (auth) => {
          if (auth.id) { this._router.navigate(['/heroes']) }
        }
      })
  }

  loginWithoutAuth():void {
    this._router.navigate(['/heroes'])
  }

}
