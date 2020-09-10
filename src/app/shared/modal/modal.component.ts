import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

function defaultSubmitAction(): void { }

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  @Input() public title = 'Modal';
  @Input() public submitText = 'Ok';
  @Output() public submitAction: EventEmitter<any> = new EventEmitter();

  @ViewChild('modalobj', { static: false }) public modal: any;

  closeResult: string;

  ngOnInit(): void {
  }

  public open(): Promise<any> {
    return this.modalService.open(this.modal, {ariaLabelledBy: 'modal-basic-title'}).result;
  }

  public close(reason: string): void {
    this.modal.close(reason);
  }

}
