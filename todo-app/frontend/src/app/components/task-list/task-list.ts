import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  searchText: string = '';

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  selectedTask: Task = {
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    comments: ''
  };


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  openEditModal(task: Task) {
    this.selectedTask = { ...task };
    const modal = new bootstrap.Modal(document.getElementById('editModal')!);
    modal.show();
  }

  updateTask() {
    this.taskService.updateTask(this.selectedTask._id!, this.selectedTask).subscribe(() => {
      this.loadTasks();
      this.showToast('✅ Task updated successfully!');

      const modalEl = document.getElementById('editModal');
      const modal = bootstrap.Modal.getInstance(modalEl!);
      modal?.hide();
    });
  }


  openDeleteModal(task: Task) {
    this.selectedTask = { ...task };
    const modal = new bootstrap.Modal(document.getElementById('deleteModal')!);
    modal.show();
  }

  confirmDelete() {
    this.taskService.deleteTask(this.selectedTask._id!).subscribe(() => {
      this.loadTasks();
      this.showToast('🗑️ Task deleted successfully!');

      const modalEl = document.getElementById('deleteModal');
      const modal = bootstrap.Modal.getInstance(modalEl!);
      modal?.hide();
    });
  }

  showToast(message: string) {
    const toastMsg = document.getElementById('toastMsg');
    const toastEl = document.getElementById('successToast');

    if (toastMsg && toastEl) {
      toastMsg.innerText = message;
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
  sortTasks(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.tasks.sort((a: any, b: any) => {
      let valueA = a[column];
      let valueB = b[column];

      if (column === 'dueDate') {
        valueA = new Date(a[column]);
        valueB = new Date(b[column]);
      }

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  

}
