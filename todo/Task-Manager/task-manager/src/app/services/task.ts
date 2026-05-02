import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../models/task-item.models';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5111/api/tasks';

  tasks = signal<TaskItem[]>([]);

  constructor() {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<TaskItem[]>(this.apiUrl).subscribe(data => {
      this.tasks.set(data);
    });
  }

  addTask(task: string, status: string){
    const newTask: TaskItem = { task, status };
    this.http.post<TaskItem>(this.apiUrl, newTask).subscribe(createdTask => {
      this.tasks.update((previousState) => [...previousState, createdTask]);
    });
  }

  updateTaskStatus(taskName: string, newStatus: string) {
    const task = this.tasks().find(t => t.task === taskName);
    if (!task || !task.id) return;
    
    const updatedTask = { ...task, status: newStatus };
    this.http.put(`${this.apiUrl}/${task.id}`, updatedTask).subscribe(() => {
      this.tasks.update((tasks) => {
        return tasks.map(t => 
          t.task === taskName ? updatedTask : t
        );
      });
    });
  }
}
