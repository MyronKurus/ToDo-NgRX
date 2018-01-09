import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import {Action, Store} from '@ngrx/store';
import {IAppState} from '../models/app-state.model';
import {addTodo, removeTodo, U_ADD_TODO, U_REMOVE_TODO} from '../actions/todo.actions';
import {Todo} from '../models/todo.model';

@Injectable()
export class TodosService {

  constructor(private store: Store<IAppState>) {
  }

  getTodos(): Observable<Todo[]> {
    return this.store.select('todos');
  }

  createTodo(title: string): void {
    const num = (Math.random() * 100).toFixed(0);
    const todoItem = {id: num, title, completed:  false};
    this.store.dispatch(addTodo(todoItem));
  }

  @dispatcher(U_REMOVE_TODO)
  removeTodo(id: number): void {
    // this.store.dispatch(removeTodo(id));
  }

}

function dispatcher(type: string) {

  const store: Store<IAppState>;

  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = (...args: any[]) => {
      store.dispatch({type: type, payload: {args}});
    };
  };
}
