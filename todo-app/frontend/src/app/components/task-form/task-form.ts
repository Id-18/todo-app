
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {
  task: Task = {
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    comments: ''
  };

  constructor(private taskService: TaskService, private router: Router) { }

  formInvalid = false;
  addTask() {
    if (
      !this.task.assignedTo ||
      !this.task.status ||
      !this.task.dueDate ||
      !this.task.priority
    ) {
      this.showToast('⚠️ Please fill all required fields!');
      return;
    }

    this.taskService.createTask(this.task).subscribe(() => {
      this.showToast('✅ Task added successfully!');
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000); 
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
}

