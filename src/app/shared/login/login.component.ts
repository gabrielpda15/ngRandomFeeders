import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { LoginService, LoginResult } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService/*, private session: SessionService*/) { }

  private isEnabled = false;

  @Output() public cancel = new EventEmitter<any>();
  @Output() public authenticated = new EventEmitter<LoginResult>();

  public username: string;
  public password: string;
  public errorMessage: string = null;

  @ViewChild('modal', {static: false}) private modal: ModalComponent;

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginService.postLogin({username: this.username, password: this.password}).subscribe(result => {
      if (result.authenticated) {
        this.modal.close('ok');
      } else {
        this.errorMessage = result.message;
      }
    }, error => {
      this.errorMessage = error;
    }, () => { });
  }

  public open(): void {
    this.modal.open().then((result) => {
      if (result === 'ok') {
        this.authenticated.emit(result);
      } else {
        this.cancel.emit(result);
      }
    }, (reason) => this.cancel.emit(reason));
  }

}
