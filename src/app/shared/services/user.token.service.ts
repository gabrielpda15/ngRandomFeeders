import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ITokenState } from "../models/tokenstate.interface";
import { JwtHelperService } from '@auth0/angular-jwt'
import { environment } from "src/environments/environment";
import { IToken } from "../models/token.interface";

@Injectable()
export class UserTokenService {

  private readonly TokenKey: string = 'id_token';

  //private tokenSubject = new Subject<ITokenState>();
  private jwtHelper = new JwtHelperService();

  //public tokenState = <Observable<ITokenState>>this.tokenSubject;

  constructor() { }

  public getTokenValue(): IToken {
    const value: string = localStorage.getItem(this.TokenKey);
    if (value) {
      const token = this.jwtHelper.decodeToken(value);
      if (token.iss === environment.domain &&
          token.aud === environment.domain &&
          typeof token.jti !== 'undefined') {
            return <IToken>token;
          }
    }

    return null;
  }

  public setTokenValue(value: string): void {
    localStorage.setItem(this.TokenKey, value);
    //this.tokenSubject.next(<ITokenState>{ token: value });
  }

}
