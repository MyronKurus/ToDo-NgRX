import { Component } from '@angular/core';
import {TodosService} from '../../services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private todosService: TodosService) { }

  onAddTodo(title: string) {
    this.todosService.createTodo(title);
  }

}
