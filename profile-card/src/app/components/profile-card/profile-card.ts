import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})

export class ProfileCard {
  name = 'Alex Morgan';
  jobTitle = 'Frontend Developer';
  location = 'Buenos Aires, Argentina';
  bio = 'I am a passionate frontend developer who enjoys creating modern and user-friendly websites.';

  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'];

  followers = 120;
  isFollowing = false;


  showBio = true;
  editMode = false;

  toggleFollow() {
    this.isFollowing = !this.isFollowing;

    if (this.isFollowing) {
      this.followers++;
    } else {
      this.followers--;
    }
  }

}