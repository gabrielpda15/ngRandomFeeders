import { Component, OnInit } from '@angular/core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html'
})
export class TournamentComponent implements OnInit {

  constructor() { }

  public get arrow() {
    return faIcons['arrowCircleLeft'];
  }

  ngOnInit(): void {
  }

}
