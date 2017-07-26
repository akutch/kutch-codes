import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation';

@Component({
  selector: 'ak-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
