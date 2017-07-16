import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/Router';
import { fadeInAnimation } from '../animations/fade-in-animation'

@Component({
  selector: 'ak-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class NavComponent implements OnInit {

  @Input() isGradientBackground = this.isGradientBackground;

  constructor() {

  }

  ngOnInit() {
  }

}
