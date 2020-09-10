import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService {

  constructor() {

  }

  public postLogin(data: { username: string, password: string }): Observable<LoginResult> {
    const result = new LoginResult();
    result.authenticated = data.username === 'admin' && data.password === 'admin';
    result.message = result.authenticated ? 'OK' : 'Usuário e/ou senha inválidos!';
    result.token = 'token';
    return of(result);
  }

}

export class LoginResult {
  public authenticated: boolean;
  public message: string;
  public token: string;
}
