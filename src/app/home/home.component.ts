import { Component, OnInit } from '@angular/core';
import { faRandom, faUsers, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { EmailService } from '../shared/email/email.service';
import { isNullOrWhitespace, emailRegex } from '../shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public faRandom = faRandom;
  public faUsers = faUsers;
  public faEllipsisH = faEllipsisH;

  public errorMessage: string = null;
  public successMessage: string = null;
  public idleMessage: string = null;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendContactUs(name: {value: string}, email: {value: string}, message: {value: string}): void {
    this.successMessage = null;
    this.errorMessage = null;
    if (!isNullOrWhitespace(name.value)) {
      if (emailRegex.test(email.value)) {
        if (message.value.length > 20) {
          this.idleMessage = 'Enviando mensagem...';
          this.emailService.send('contato@randomfeeders.com.br',
                                 'contato@randomfeeders.com.br',
                                 `${name.value} envio uma mensagem`,
                                 `Nome: ${name.value}<br>
                                  Email: ${email.value}<br><br>
                                  ${message.value}`)
            .then(r => {
              if (r === 'OK') {
                this.successMessage = 'Mensagem enviada com sucesso!';
              } else {
                this.errorMessage = 'Aconteceu um erro inesperado! Aguarde e tente novamente mais tarde.';
                console.error(r);
              }
            })
            .catch(e => {
              this.errorMessage = 'Aconteceu um erro inesperado! Aguarde e tente novamente mais tarde.';
              console.error(e);
            })
            .finally(() => {
              name.value = '';
              email.value = '';
              message.value = '';
              this.idleMessage = null;
            });
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
