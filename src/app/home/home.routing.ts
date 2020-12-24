import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'tournament', loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentModule) }
    ]
  }
];

export const homeRouting = RouterModule.forChild(routes);
