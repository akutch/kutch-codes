import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation'

@Component({
  selector: 'ak-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
