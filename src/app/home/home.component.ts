import { Component, OnInit } from '@angular/core';
import { faRandom, faUsers, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { EmailService } from '../shared/email/email.service';
import { isNullOrWhitespace } from '../shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  public faRandom = faRandom;
  public faUsers = faUsers;
  public faEllipsisH = faEllipsisH;

  public errorMessage: string = null;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendContactUs(name: {value: string}, email: {value: string}, message: {value: string}): void {
    this.errorMessage = null;
    if (!isNullOrWhitespace(name.value)) {
      if (this.emailRegex.test(email.value)) {
        if (message.value.length > 20) {
          this.errorMessage = null;
          console.log('Trying to send email');
          this.emailService.send('contato@randomfeeders.com.br',
                                 'contato@randomfeeders.com.br',
                                 `${name.value} envio uma mensagem`,
                                 `Nome: ${name.value}<br>
                                  Email: ${email.value}<br><br>
                                  ${message.value}`)
            .then(r => console.log({r}))
            .catch(e => console.log({e}))
            .finally(() => console.log('finally'));
        } else {
          this.errorMessage = 'A sua mensagem deve possuir mais de 20 caracteres!';
        }
      } else {
        this.errorMessage = 'O e-mail digitado é inválido!';
      }
    } else {
      this.errorMessage = 'Nome é um campo obrigatório';
    }
  }

}
