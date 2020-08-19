import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  public percent: number = environment.comingSoon;

  constructor() { }

  ngOnInit(): void {
  }

}
