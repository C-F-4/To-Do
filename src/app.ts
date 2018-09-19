import { Task } from './task';

export class App {
  public pageTitle = 'To-Do List';
  public taskList = new Array<Task>();
  public newTaskDescription = '';

  private taskIdPrefix = 'TID';
  private taskIdCtr = 0;

  constructor() {
    this.taskList = [
      {
        'id': this.getId(),
        'description': 'This is Sample Task',
        'status': 0
      },
      {
        'id': this.getId(),
        'description': 'This is completed Sample Task',
        'status': 1
      }
    ];
  }

  private getId() {
    return this.taskIdPrefix + this.taskIdCtr ++;
  }

  public addTask() {
    if (this.newTaskDescription) {
      this.taskList.push(new Task(
        this.getId(),
        this.newTaskDescription
      ));
      this.newTaskDescription = '';
    }
  }

  public removeTask(task) {
    let _index = this.taskList.indexOf(task);
    if (_index >= 0) {
      this.taskList.splice(_index, 1);
    }
  }
}