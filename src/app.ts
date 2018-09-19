import { Task } from './task';

export class App {
  public pageTitle = 'To-Do List';
  public taskList = new Array<Task>();

  public newTaskDescription = '';

  public addTask() {
    if (this.newTaskDescription) {
      this.taskList.push(new Task(this.newTaskDescription));
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