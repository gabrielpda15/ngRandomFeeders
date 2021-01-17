import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleLeft, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { TournamentRule } from 'src/app/models/tournament-rule.model';
import { TournamentService } from '../tournament.service';

declare type rule = {
  title?: string,
  description?: string[],
  icon?: IconProp,
  initials?: string,
  bg?: string
};

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html'
})
export class RulesComponent implements OnInit {

  constructor(private tournamentService: TournamentService) { }

  public faArrowCircleLeft = faArrowCircleLeft;

  public rules: Observable<TournamentRule[]>;

  ngOnInit(): void {
    this.rules = this.tournamentService.getRules();
  }

}
