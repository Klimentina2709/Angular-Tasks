import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './component/to-do/to-do';

@Component({
  imports: [RouterOutlet, ToDo],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('to-do-app');
}
