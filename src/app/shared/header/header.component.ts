import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginResult, LoginService } from '../login/login.service';
import { environment } from 'src/environments/environment';
import { UserTokenService } from '../services/user.token.service';
import { isNullOrWhitespace } from '../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public relative = false;
  public loggedIn: boolean = false;
  public avatarSpan: string = null;
  public loginEnabled: boolean = environment.loginEnabled;

  public get getAvatarUrl(): string {
    if (isNullOrWhitespace(this.avatarUrl)) return null;
    else return this.avatarUrl;
  }

  private avatarUrl: string;

  constructor(private userTokenService: UserTokenService) { }

  ngOnInit(): void {
    let token = this.userTokenService.getTokenValue();
    console.log(token);
    this.loggedIn = token != null;
    this.avatarUrl = token.data.avatar;
    this.avatarSpan = `${token.sub} (${token.data.email})`
  }

  public onLoginAuthenticated(event: LoginResult): void {
    this.userTokenService.setTokenValue(event.token.substr(7, event.token.length - 7));
    this.loggedIn = true;
    this.avatarUrl = event.avatar;
  }

  public onRegisterSuccess(event: any): void {

  }

  public toggleProfile(c: any) {

  }

  public toggleTooltip(c: any) {

  }

  public logout(): void {

  }

}
