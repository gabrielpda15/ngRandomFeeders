import { Observable, from } from 'rxjs';

export const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const discordRegex = new RegExp(/^(.*)#(\d{4})$/);

export function isNullOrWhitespace(input: string): boolean {
  if (typeof input === 'undefined' || input == null) {
    return true;
  }
  return input.replace(/\s/g, '').length < 1;
}

export function delay(ms: number): Observable<any> {
  return from(new Promise(resolve => setTimeout(resolve, ms)));
}

export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) ) + min;
}
