import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation'

@Component({
  selector: 'ak-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
