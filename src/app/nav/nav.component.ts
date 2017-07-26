import { Component, OnInit, Input, HostListener } from '@angular/core';
import { fadeInFastAnimation } from '../animations/fade-in-fast-animation';

@Component({
  selector: 'ak-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [fadeInFastAnimation],
  host: {'[@fadeInFastAnimation]': ''}
})

export class NavComponent implements OnInit {

  @Input() isGradientBackground = this.isGradientBackground;
  mobileMenuShown = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMobileMenu() {
    this.mobileMenuShown = !this.mobileMenuShown;
  }

  // close mobile menu on 'Escape' key
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ( event.keyCode === 27 ) {
      this.mobileMenuShown = false;
    }
  }

}
