import { Component, OnInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public faDiscord = faDiscord;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }

}
