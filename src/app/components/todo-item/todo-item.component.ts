import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input() todo;
  constructor(private todosService: TodosService) {}

  removeTodo( id ) {
    this.todosService.removeTodo(id);
  }
}
