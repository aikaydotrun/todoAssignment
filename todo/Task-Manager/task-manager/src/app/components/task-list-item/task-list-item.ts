import { Component, input, computed, inject } from '@angular/core';
import { TaskItem } from '../../models/task-item.models';
import { CommonModule } from '@angular/common';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  taskItem = input.required<TaskItem>();
  statusValues = ['Todo', 'In Progress', 'Completed'];
  taskService = inject(Task);

  action = computed(() => {
    const taskItemValue = this.taskItem();

    return this.statusValues.filter(x => taskItemValue.status !== x);
  });

  changeStatus(newStatus: string) {
    this.taskService.updateTaskStatus(this.taskItem().task, newStatus);
  }
}
