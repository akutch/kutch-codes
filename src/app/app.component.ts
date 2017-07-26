import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'ak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ak';
  isGradientBackground = false;

  constructor( private router: Router ) {

    // listen for route change events
    router.events.forEach((event) => {

      // only for NavigationStart events
      if ( event instanceof NavigationStart ) {

        // if we are going to the About page change, set isGradientBackground to true 
         if ( event.url === '/about' ) {
          this.isGradientBackground = true;
        }
        // for all other pages, set isGradientBackground to false
        else {
            this.isGradientBackground = false;
        }
      }
    });
  }

}
