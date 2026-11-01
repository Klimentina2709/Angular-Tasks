import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {

  members = [
    {
      name: 'Alex',
      role: 'Founder',
      description: 'The person behind Happy Website.'
    },
    {
      name: 'Nick',
      role: 'Designer',
      description: 'Creates beautiful and creative ideas.'
    },
    {
      name: 'Mark',
      role: 'Developer',
      description: 'Brings our ideas to life with code.'
    }
  ];

}
