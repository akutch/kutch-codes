import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation'

@Component({
  selector: 'ak-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
