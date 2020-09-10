import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public relative = false;

  public loginEnabled = environment.loginEnabled;

  constructor() { }

  ngOnInit(): void {
  }
}
