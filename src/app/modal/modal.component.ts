import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, ElementRef, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { slideLeftRightAnimation } from '../animations/slide-left-right-animation';

/*

sample use:

<ak-modal (closeModal)="closeModal($event)"
          [isModalShown]="isModalShown"
          [modalContent]="modalContent"></ak-modal>
*/

@Component({
  selector: 'ak-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [slideLeftRightAnimation],
  encapsulation: ViewEncapsulation.None
  
})
export class ModalComponent implements OnChanges, OnInit {

  @Input() isModalShown = this.isModalShown;
  @Input() modalContent = this.modalContent;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('tigerRain') tigerRain: ElementRef;

  ngOnInit() {
    this.makeTigersRain();
  }
  
  onCloseModal() {
    this.closeModal.emit(true);
  }
  
  ngOnChanges() {

    // if the clemson modal is showing
    if ( this.isModalShown && this.modalContent === 'clemson') {   

      // trigger the clemson modal close after 3 seconds 
      setTimeout( () => {
        this.onCloseModal();
      }, 2500);

    }
  }

  makeTigersRain() {
    let distFromLeft = 0,
        tigers = '';

    // create and place the tiger raindrops
    for ( distFromLeft = 0; distFromLeft < 100; distFromLeft++ ) {

      // number between 98 and 1
      let animationTiming = (Math.floor(Math.random() * (98 - 1 + 1) + 1));

      // number between 5 and 2
      let smallIncrement = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      
      distFromLeft += smallIncrement;
      // make sure the tiger is painted on the page to avoid horizontal overflow
      if ( distFromLeft > 95 ) {
        continue;
      }

      //add in a new raindrop with various randomizations to certain CSS properties
      tigers += `<div class="tiger" 
                      style="animation-delay: 0.${animationTiming}s; 
                             animation-duration: 1.${animationTiming}s;
                             left: ${distFromLeft}vw; 
                             top: ${smallIncrement + smallIncrement - 75}px;">
                  </div>`;

      // append to raindrop area
      this.tigerRain.nativeElement.insertAdjacentHTML('beforeend', tigers);
    }

  }

}
