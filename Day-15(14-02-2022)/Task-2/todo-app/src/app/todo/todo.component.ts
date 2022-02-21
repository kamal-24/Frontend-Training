import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  inputTask:any
  taskList:any=[]
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.taskList.push(this.inputTask)
  }
  deleteTask(i:any){
    
    this.taskList.splice(i,1)
  }
}
