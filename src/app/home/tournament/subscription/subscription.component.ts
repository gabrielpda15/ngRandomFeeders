import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmailService } from 'src/app/shared/email/email.service';
import { isNullOrWhitespace, emailRegex, discordRegex } from '../../../shared/utils';
import { Router } from '@angular/router';

declare type subscription = {
  name: { value: string },
  email: { value: string },
  discord: { value: string },
  nicklol: { value: string }
};

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent implements OnInit {

  public errorMessage: string = null;
  public successMessage: string = null;
  public idleMessage: string = null;

  constructor(private emailService: EmailService, private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    this.location.replaceState('/');
  }

  private getJson(value: subscription): string {
    return `
    {<br>
      "type": "embed",<br>
      "title": "Inscrição no Torneio",<br>
      "description": [<br>
        "Nome: ${value.name.value}\\n",<br>
        "Email: ${value.email.value}\\n",<br>
        "Discord: @${value.discord.value}\\n",<br>
        "Nick do LoL: ${value.nicklol.value}\\n"<br>
      ]<br>
    }
  `;
  }

  public sendSubscription(value: subscription): void {
    this.successMessage = null;
    this.errorMessage = null;

    if (!isNullOrWhitespace(value.name.value)) {
      if (emailRegex.test(value.email.value)) {
        if (discordRegex.test(value.discord.value)) {
          if (!isNullOrWhitespace(value.nicklol.value)) {
            this.idleMessage = 'Enviando inscrição...';
            this.emailService.send('contato@randomfeeders.com.br',
                                 'contato@randomfeeders.com.br',
                                 `Inscrição no torneio`,
                                 `Nome: ${value.name.value}<br>
                                  Email: ${value.email.value}<br>
                                  Discord: ${value.discord.value}<br>
                                  Nick do LoL: ${value.nicklol.value}<br><br>
                                  Json: ${this.getJson(value)}`)
            .then(r => {
              if (r === 'OK') {
                this.successMessage = 'Inscrição enviada com sucesso!';
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
              this.idleMessage = null;
              value.name.value = '';
              value.email.value = '';
              value.discord.value = '';
              value.nicklol.value = '';
              setTimeout(() => this.router.navigate(['']), 2000);
            });
          } else {
            this.errorMessage = 'Nick do LoL é um campo obrigatório!';
          }
        } else {
          this.errorMessage = 'O Discord Tag digitado é inválido!';
        }
      } else {
        this.errorMessage = 'O e-mail digitado é inválido!';
      }
    } else {
      this.errorMessage = 'Nome é um campo obrigatório!';
    }
  }

}
