import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import {Action, Store} from '@ngrx/store';
import {IAppState} from '../models/app-state.model';
import {addTodo, removeTodo, U_ADD_TODO} from '../actions/todo.actions';
import {Todo} from '../models/todo.model';
import {ActionService, StoreService} from './store';

// let storeInstance;

@Injectable()
export class TodosService {

  constructor(private storeService: StoreService) {
    // storeInstance = store;
  }

  getTodos(): Observable<Todo[]> {
    return this.storeService.select('todos');
  }

  createTodo(title: string): void {
    const num = (Math.random() * 100).toFixed(0);
    const todoItem = {id: num, title, completed:  false};
    // this.store.dispatch(addTodo(todoItem));
  }

  @UserAction(U_ADD_TODO)
  removeTodo(id: number): void {
    // this.store.dispatch(removeTodo(id));
  }

}


/*export function UserAction(action) {
  // return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  //   const newDescriptor = descriptor;
  //   newDescriptor.value = function() {
  //     return ActionService.userAction(this, arguments, originalMethod, action);
  //   };
  //
  //   return newDescriptor;
  // };
}*/



function UserAction(type: string) {
  ActionService.getStore();

  return function (target: any, key: string, descriptor: PropertyDescriptor) {

  };
}
