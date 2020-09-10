import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const homeRouting = RouterModule.forChild(routes);
