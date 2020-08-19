import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ComingSoonComponent }
];

@NgModule({
  declarations: [ ComingSoonComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class ComingSoonModule { }
