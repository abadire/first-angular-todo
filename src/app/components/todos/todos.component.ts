import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  value:string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'One',
        completed: true
      },
      {
        content: 'Two',
        completed: false
      },
    ];
  }

  completeTodo(id:number) {
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((el, idx) => idx !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.value,
      completed: false
    });

    this.value = "";
  }

}
