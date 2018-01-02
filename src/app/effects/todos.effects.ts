import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { U_ADD_TODO, S_ADD_TODO, U_REMOVE_TODO, S_REMOVE_TODO } from '../actions/todo.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosEffects {
  constructor( private actions$: Actions) {
  }

  @Effect() addTodo$ = this.actions$
    .ofType(U_ADD_TODO)
    .switchMap((action) => {
      return Observable.of({
          type: S_ADD_TODO,
          payload: action.payload
        });
    });

  @Effect() removeTodo$ = this.actions$
    .ofType(U_REMOVE_TODO)
    .switchMap((action) => {
      return Observable.of({
          type: S_REMOVE_TODO,
          payload: action.payload
        });
    });
}
