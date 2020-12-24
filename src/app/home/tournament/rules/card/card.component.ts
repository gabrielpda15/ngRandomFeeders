import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-rulecard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public initials: string;
  @Input() public title: string;
  @Input() public icon: IconProp;
  @Input() public description: string[];
  @Input() public diff = false;

  constructor() { }

  ngOnInit(): void {
  }

}
