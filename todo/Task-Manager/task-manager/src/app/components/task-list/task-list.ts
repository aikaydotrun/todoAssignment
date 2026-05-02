import { Component, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.models';
import { TaskListItem } from '../task-list-item/task-list-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  heading = input.required<string>();
  tasks = input.required<TaskItem[]>();
}
