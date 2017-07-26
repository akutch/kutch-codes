import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation';

@Component({
  selector: 'ak-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
