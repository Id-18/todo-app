import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(`${this.baseURL}/tasks`);
}

  createTask(task: any) {
    return this.http.post(`${this.baseURL}/task`, task);
  }
  updateTask(id: string, updatedTask: Task) {
  return this.http.put(`${this.baseURL}/task/${id}`, updatedTask);
}


  deleteTask(id: string) {
    return this.http.delete(`${this.baseURL}/task/${id}`);
  }
}
