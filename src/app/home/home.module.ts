import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { TournamentComponent } from './tournament/tournament.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [ HomeComponent, TournamentComponent, LayoutComponent ],
  imports: [ CommonModule, homeRouting, FontAwesomeModule, SharedModule ]
})
export class HomeModule { }
