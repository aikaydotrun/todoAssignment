import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  private taskService = inject(Task);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,

    }),
    status: new FormControl('Todo', {
      nonNullable: true,

    })
  })

  onSubmit() {
    const rawValue = this.taskForm.getRawValue();
    this.taskService.addTask(rawValue.task, rawValue.status);
    this.taskForm.reset();
  }
}