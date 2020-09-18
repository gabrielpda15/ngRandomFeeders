import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tournamentRouting } from './tournament.routing';
import { SharedModule } from '../../shared/shared.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TournamentComponent } from './tournament.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [ TournamentComponent, SubscriptionComponent, InfoComponent ],
  imports: [ CommonModule, tournamentRouting, SharedModule ],
  providers: [ ]
})
export class TournamentModule { }
