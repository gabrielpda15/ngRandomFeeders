import { Routes, RouterModule } from '@angular/router';
import { TournamentComponent } from './tournament.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentComponent,
    children: [
      { path: '', component: InfoComponent },
      { path: 'subscription', component: SubscriptionComponent }
    ]
  }
];

export const tournamentRouting = RouterModule.forChild(routes);
