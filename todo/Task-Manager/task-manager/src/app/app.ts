import { Component, inject, computed } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Task } from './services/task';


@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private taskService = inject(Task);

  tasks = this.taskService.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((task: any) => task.status === 'Todo');
  });


  inProgress = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((task: any) => task.status === 'In Progress');
  });


  completed = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((task: any) => task.status === 'Completed');
  });
}
