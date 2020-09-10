import { Component, OnInit } from '@angular/core';
import { faRandom, faUsers, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public faRandom = faRandom;
  public faUsers = faUsers;
  public faEllipsisH = faEllipsisH;
  public faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
