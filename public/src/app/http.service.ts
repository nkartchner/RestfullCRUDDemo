import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }
  addNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>('/tasks/new', task);
  }

  getSingleTask(id: string) {
    return this.http.get(`/task/${id}`);
  }

  updateTask(task: Task) {
    return this.http.put(`/task/update/${task._id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`/task/delete/${id}`);
  }
}
