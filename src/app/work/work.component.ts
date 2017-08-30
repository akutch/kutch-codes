import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation';

@Component({
  selector: 'ak-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''},
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
