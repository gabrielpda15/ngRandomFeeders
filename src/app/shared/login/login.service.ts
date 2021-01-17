import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public postLogin(data: { username: string, password: string }): Observable<LoginResult> {
    return this.http
      .post<LoginResult>(environment.apiEndpoint + `identity/login`, JSON.stringify(data), { observe: 'response' })
      .pipe(
        map((res: HttpResponse<LoginResult>) => new LoginResult(res.body)),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

}

export class LoginResult {

  public authenticated: boolean;
  public message?: string;
  public token?: string;
  public avatar: string;
  public exp?: Date;

  constructor(obj?: any) {
    this.authenticated = obj && obj.authenticated || false;
    this.message = obj && obj.message || null;
    this.token = obj && obj.token || null;
    this.avatar = obj && obj.avatar || null;
    this.exp = obj && obj.exp || null;
  }
}
