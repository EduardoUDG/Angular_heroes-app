import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Bloqueado por canActivate')
    return this._authService.verifyAuthentication()
      .pipe(
        tap( isAuth => {
          if( !isAuth ) {
            this._router.navigate(['/auth/login'])
          }
        })
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Bloqueado por canLoad')
    return this._authService.verifyAuthentication()
      .pipe(
        tap( isAuth => {
          if( !isAuth ) {
            this._router.navigate(['/auth/login'])
          }
        })
      );
  }
}
