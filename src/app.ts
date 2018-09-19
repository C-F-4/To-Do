import { Task } from './task';

export class App {
  public pageTitle = 'To-Do List';
  public taskList = new Array<Task>();
  public newTaskDescription = '';

  private taskIdPrefix = 'TID';

  constructor() {
    this.taskList = [
      {
        'id': 'TID0',
        'description': 'This is Sample Task',
        'status': 0
      },
      {
        'id': 'TID1',
        'description': 'This is completed Sample Task',
        'status': 1
      }
    ];
  }

  public addTask() {
    if (this.newTaskDescription) {
      this.taskList.push(new Task(
        this.taskIdPrefix + this.taskList.length,
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