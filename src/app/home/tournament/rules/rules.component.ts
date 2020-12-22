import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleLeft, faUserFriends } from '@fortawesome/free-solid-svg-icons';

declare type rule = {
  title: string,
  description: string[],
  icon: IconProp,
  initials: string,
  diff: boolean
};

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  public faArrowCircleLeft = faArrowCircleLeft;

  public rules: rule[] = [
    {
      title: 'X1 Tournament',
      description: [
        'Condição de Vitória: First Blood, First Tower ou 100 de farm;',
        'Livre uso de qualquer campeão;',
        'Serão duas fases:\n' +
        '- Eliminatórias: Um jogo blind pick, até restar 8 jogadores;\n' +
        '- Chaves: Melhor de três, sendo 2 jogos com 3 bans e draft pick, e um jogo blind pick;',
        'Ofensas ou discriminações levarão a desclassificação;',
        'Após o término do X1 obrigatório a saída dos participantes, ' +
        'caso contrário o participante que se recusar a deixar a partida será banido dos próximos torneios;',
        'O prêmio será enviado para o e-mail e discord cadastrados.'
      ],
      icon: faUserFriends,
      initials: 'X1T',
      diff: true
     }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
