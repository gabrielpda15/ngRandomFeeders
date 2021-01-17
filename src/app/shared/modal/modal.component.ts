import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
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
  @Input() public submitEnable: boolean = true;
  @Output() public submitAction: EventEmitter<any> = new EventEmitter();

  @ViewChild('modalobj', { static: false }) public modal: TemplateRef<any>;
  @ViewChild('content', { static: false }) public content: TemplateRef<any>;

  ngOnInit(): void {
  }

  public handleKeyDown(event: KeyboardEvent, modal: any): void {
    if (event.key === 'Enter' && this.submitEnable) {
      this.submitAction.emit(modal);
    }
  }

  public open(): Promise<any> {
    return this.modalService.open(this.modal, {ariaLabelledBy: 'modal-basic-title'}).result;
  }

  public submit(modal: any): void {
    this.submitAction.emit(modal);
  }

}
