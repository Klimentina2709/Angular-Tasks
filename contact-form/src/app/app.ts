import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from './components/contact-form/contact-form';

@Component({
  imports: [RouterOutlet, ContactForm],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('contact-form');
}
