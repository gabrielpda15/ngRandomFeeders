import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { TournamentRule } from 'src/app/models/tournament-rule.model';
import { faIcons } from 'src/app/shared/fa-icons';

@Component({
  selector: 'app-rulecard',
  templateUrl: './card.component.html',
  styles: [ 'li { white-space: pre-wrap; }' ]
})
export class CardComponent implements OnInit {

  @Input() public value: TournamentRule;

  constructor() { }

  public get description(): string[] {
    return this.value.description.split('<br>')
      .map(x => x.replace(/<crlf>/g, '\n'));
  };

  public get icon(): IconDefinition {
    return faIcons[this.value.icon];
  }

  ngOnInit(): void {
  }

}
