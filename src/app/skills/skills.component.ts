import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in-animation';

@Component({
  selector: 'ak-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    },
    {
      'name': 'Skill',
      'logo': 'Skill',
      'category': 'programming',
      'level': 10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
