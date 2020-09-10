import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { random } from '../utils';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  public limit = 404;
  public count = this.limit;

  constructor() { }

  ngOnInit(): void {
  }

  private recursiveCountUp(): void {
    this.count += random(1, 10);
    if (this.count >= this.limit) {
      this.count = this.limit;
      return;
    }
    setTimeout(() => this.recursiveCountUp(), 3);
  }

  public onMouseEnter(): void {
    this.count = 0;
    this.recursiveCountUp();
  }

}
