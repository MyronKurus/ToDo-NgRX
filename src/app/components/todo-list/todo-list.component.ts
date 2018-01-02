import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { IAppState } from '../../models/app-state.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todolist: IAppState;

  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(items => {
      this.todolist = items;
    });
  }
}
