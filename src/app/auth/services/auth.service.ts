import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Auth } from '../interfaces/auth.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = environment.BASE_URL;
  private _auth: Auth | undefined;

  get auth(){
    return { ...this._auth };
  }

  constructor(
    private _http: HttpClient
  ) { }

  login(): Observable<Auth>{
    return this._http.get<Auth>(`${this.base_url}/usuarios/1`)
      .pipe(
        tap( auth => this._auth = auth ),
        tap( auth => localStorage.setItem('id', auth.id) )
      );
  }

  logout(): void {
    this._auth = undefined;
  }

}
