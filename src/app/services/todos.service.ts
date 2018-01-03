import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import {Store} from '@ngrx/store';
import {IAppState} from '../models/app-state.model';
import { addTodo, removeTodo } from '../actions/todo.actions';
import {Todo} from '../models/todo.model';

@Injectable()
export class TodosService {

  constructor(private store: Store<IAppState>) {
  }

  getTodos(): Observable<Todo[]> {
    return this.store.select('todos');
  }

  createTodo(title: string) {
    const num = (Math.random() * 100).toFixed(0);
    const todoItem = {id: num, title, completed:  false};
    this.store.dispatch(addTodo(todoItem));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo(id));
  }

}
