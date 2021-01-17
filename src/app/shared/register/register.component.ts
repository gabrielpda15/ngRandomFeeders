import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Identity } from 'src/app/models/identity.model';
import { ModalComponent } from '../modal/modal.component';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  @Output() public cancel = new EventEmitter<any>();
  @Output() public success = new EventEmitter<any>();

  public model: Identity = new Identity();
  public errorMessage: string = null;

  @ViewChild('modal', {static: false}) private modal: ModalComponent;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  public open(): void {
    this.modal.open();
  }

  public onSubmit(event: any) {
    event.close();
  }

  public canSubmit(): boolean {
    return false;
  }

}
