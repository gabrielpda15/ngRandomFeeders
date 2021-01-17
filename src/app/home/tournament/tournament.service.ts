import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { TournamentRule } from "src/app/models/tournament-rule.model";
import { environment } from "src/environments/environment";

@Injectable()
export class TournamentService {

  constructor(private http: HttpClient) { }

  public getRules(): Observable<TournamentRule[]> {
    return this.http
      .get<TournamentRule[]>(environment.apiEndpoint + `tournament/rules`, { observe: 'response' })
      .pipe(
        map((res: HttpResponse<TournamentRule[]>) => res.body),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  public postSubscription(sub: any): Observable<any> {
    return this.http
      .post<any>(environment.apiEndpoint + ``, JSON.stringify(sub), { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => res.body),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

}
