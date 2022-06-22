import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = environment.BASE_URL;

  constructor(
    private _http: HttpClient
  ) { }

  login(): Observable<Auth>{
    return this._http.get<Auth>(`${this.base_url}/usuarios/1`)
  }

}
