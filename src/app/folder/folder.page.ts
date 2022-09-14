import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  public folder: string;
  title = 'タスク登録';
  task: string;
  tasks: { name:string }[]=[
    { name: 'タスク１' },
    { name: 'タスク２' },
  ];
  constructor() {}

  ionViewWillEnter() {
    if('tasks' in localStorage){
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  addTask() {
    this.tasks.push({
      name: this.task
    });
    localStorage.tasks = JSON.stringify(this.tasks)
    this.task = '';
  }
}
