import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { growAndFadeInOutAnimaiton } from '../animations/grow-and-fade-in-out-animation'

@Component({
  selector: 'ak-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [growAndFadeInOutAnimaiton]
})
export class ModalComponent implements OnInit {

  @Input() isModalShown = this.isModalShown;
  @Input() modalContent = this.modalContent;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

}
