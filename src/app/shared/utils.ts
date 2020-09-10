import { Observable, from } from 'rxjs';

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
