import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation';

@Component({
  selector: 'ak-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
