import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import { U_ADD_TODO, U_REMOVE_TODO} from '../actions/todo.actions';
import { Todo } from '../models/todo.model';
import { StoreService, UserAction } from './store';

@Injectable()
export class TodosService {

  constructor(private storeService: StoreService) {}

  getTodos(): Observable<Todo[]> {
    return this.storeService.select('todos');
  }
  @UserAction(U_ADD_TODO)
  createTodo(title: string): string {
    return title;
  }

  @UserAction(U_REMOVE_TODO)
  removeTodo(id: number): number {
    return id;
  }

}
