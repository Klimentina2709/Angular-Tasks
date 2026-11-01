import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
})
export class ContactForm implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  submitted: boolean = false;
  messages: ContactMessage[] = [];

  ngOnInit(): void {
    const savedMessages = localStorage.getItem('contactMessages');

    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }
  }

  submitForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const newMessage: ContactMessage = {
      name: this.name,
      email: this.email,
      message: this.message,
      date: new Date().toISOString()
    };

    this.messages.push(newMessage);

    localStorage.setItem(
      'contactMessages',
      JSON.stringify(this.messages)
    );

    this.submitted = true;
  }
}