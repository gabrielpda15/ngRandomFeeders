import { Email } from './smtp';
import { from, Observable } from 'rxjs';

export class EmailService {

  constructor() {
  }

  public send(t: string, f: string, s: string, b: string): Observable<any> {
    const promise = Email.send({
      Host : 'smtp.randomfeeders.com.br',
      Username : 'contato@randomfeeders.com.br',
      Password : 'RndFd*2020',
      To : t,
      From : f,
      Subject : s,
      Body : b
    });
    return from(promise);
  }

}
