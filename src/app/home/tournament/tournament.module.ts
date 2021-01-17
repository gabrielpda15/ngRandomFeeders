import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tournamentRouting } from './tournament.routing';
import { SharedModule } from '../../shared/shared.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TournamentComponent } from './tournament.component';
import { InfoComponent } from './info/info.component';
import { RulesComponent } from './rules/rules.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './rules/card/card.component';
import { TournamentService } from './tournament.service';


@NgModule({
  declarations: [ TournamentComponent, SubscriptionComponent, InfoComponent, RulesComponent, CardComponent ],
  imports: [ CommonModule, tournamentRouting, SharedModule, FontAwesomeModule ],
  providers: [ TournamentService ]
})
export class TournamentModule { }
