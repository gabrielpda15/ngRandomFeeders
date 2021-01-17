export interface IToken {
  jti: string;
  sub: string;
  aud: string;
  iss: string;
  exp: number;
  iat: number;
  data: any;
}
