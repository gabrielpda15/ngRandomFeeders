import { Component, Input } from "@angular/core";
import { faIcons } from "../fa-icons";

@Component({
  selector: 'app-back-button',
  template: `
    <a class="d-flex position-absolute text-dark back ml-5 mt-4" [routerLink]="route" [fragment]="fragment">
      <fa-icon class="my-auto text-primary" [icon]="arrow" size="2x"></fa-icon>
      <span class="ml-2 my-auto">Voltar</span>
    </a>
  `
})
export class BackButtonComponent {

  @Input() route: string | any[];
  @Input() fragment: string;

  public get arrow() {
    return faIcons['arrowCircleLeft'];
  }

}
