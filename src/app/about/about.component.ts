import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation'

@Component({
  selector: 'ak-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AboutComponent implements OnInit, AfterViewInit {

  isModalShown = false;
  modalContent = '';

  isContentAreaShown = false;
  contentArea = '';
  facts = [];
  scFacts = [
    {
      "key": "College",
      "value": "Clemson"
    },
    {
      "key": "Degree",
      "value": "B.S. Computer Science"
    },
    {
      "key": "Achievements",
      "value": "Graduated Cum Laude"
    },
    {
      "key": "Clubs + Groups",
      "value": "AXO, ACM, Upsilon Pi Epsilon"
    }
  ];
  maFacts = [
    {
      "key": "Employer",
      "value": "Fidelity Investments"
    },
    {
      "key": "Role",
      "value": "Cognitive Computing UX Developer"
    },
    {
      "key": "Certifications",
      "value": "AWS Certified Developer Associate"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  showContentArea(state) {

    // set timeout to duration of :leave animation 
    setTimeout(() => {
      // set content area 
      this.contentArea = state; 
      
      // set facts for content area
      if(state === 'sc') {
        this.facts = this.scFacts;
      } else if (state === 'ma') {
        this.facts = this.maFacts;
      } 
      
      // show content area
      this.isContentAreaShown = true;

    }, 500);
  }

  hideContentArea() {
    // set timeout to duration of :leave animation 
    setTimeout(() => {
      this.isContentAreaShown = false;
      this.contentArea = '';
    }, 500);

  }

}
