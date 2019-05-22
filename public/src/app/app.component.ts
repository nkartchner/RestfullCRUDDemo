import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[];
  task: Task = { title: '', description: '' };
  selectedTask: Task;
  editMode = false;
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
    this.getTasks();
    console.log(this.task);
  }
  getTasks() {
    this.httpService.getAllTasks().subscribe(data => (this.tasks = data));
  }
  submitNewTask() {
    console.log(this.task);
    this.httpService.addNewTask(this.task).subscribe(data => {
      console.log(data);
      this.tasks.push(data);
      this.task = { title: '', description: '' };
    });
  }

  deselectTask() {
    this.editMode = false;
    this.task = { title: '', description: '' };
    this.selectedTask = null;
  }
  selectTask(task: Task) {
    this.selectedTask = task;
    this.task = task;
    this.editMode = true;
  }

  updateTask() {
    this.httpService.updateTask(this.task).subscribe(data => {
      console.log('updated the task -->', data);
      this.editMode = false;
      this.task = { title: '', description: '' };
      this.selectedTask = null;
    });
  }

  deleteTask(taskId: string, index: number) {
    console.log('Task id -->', taskId);
    console.log('task index -->', index);
    console.log(this.tasks);
    this.httpService.deleteTask(taskId).subscribe(data => {
      console.log('deleted the data', data);
      this.tasks.splice(index, 1);
      console.log(this.tasks);
    });
  }
}
