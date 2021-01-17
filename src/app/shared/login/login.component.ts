import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { isNullOrWhitespace } from '../utils';
import { LoginService, LoginResult } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private isEnabled = false;

  @Output() public cancel = new EventEmitter<any>();
  @Output() public authenticated = new EventEmitter<LoginResult>();
  @Output() public register = new EventEmitter<any>();

  public username: string;
  public password: string;
  public errorMessage: string = null;

  @ViewChild('modal', {static: false}) private modal: ModalComponent;

  constructor(private loginService: LoginService/*, private session: SessionService*/) { }

  ngOnInit(): void {
  }

  public onSubmit(event: any): void {
    this.loginService.postLogin({username: this.username, password: this.password}).subscribe(result => {
      if (result.authenticated) {
        this.authenticated.emit(result);
        event.close();
      } else {
        this.errorMessage = result.message;
      }
    }, (error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.errorMessage = error.error.message;
        this.clearFields();
      }
    }, this.clearFields);
  }

  private clearFields(): void {
    this.username = '';
    this.password = '';
  }

  public open(): void {
    this.modal.open();
  }

  public canSubmit(): boolean {
    if (isNullOrWhitespace(this.username)) return false;
    if (isNullOrWhitespace(this.password)) return false;
    return true;
  }

}
