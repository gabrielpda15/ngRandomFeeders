import { Observable, throwError } from 'rxjs';
import { EmailData } from './email.model.js';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {
  }

  public send(data: EmailData): Observable<{message: string} | any> {
    return this.http
      .post(environment.apiEndpoint + `email/send`, JSON.stringify(data), { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => res.body),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

}
