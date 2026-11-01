import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.html',
})

export class ToDo {
  newTask: string = '';

  tasks: { text: string; completed: boolean }[] = [];

  addTask(): void {
    if (this.newTask.trim() === '') {
      return;
    }

    this.tasks.push({
      text: this.newTask,
      completed: false
    });

    this.newTask = '';
  }

  toggleTask(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
