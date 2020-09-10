import { Email } from '../../../assets/smtp.js';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.js';

// declare let Email: any;

export class EmailService {

  constructor() {
  }

  public send(t: string, f: string, s: string, b: string): Promise<any> {
    return Email.send({
      SecureToken: environment.emailToken,
      To : t,
      From : f,
      Subject : s,
      Body : b
    });
  }

}
