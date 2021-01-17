import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faIcons } from 'src/app/shared/fa-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

  public environment = environment;

  constructor() { }

  public get arrow() {
    return faIcons['arrowCircleLeft']
  }

  ngOnInit(): void {
  }

}
