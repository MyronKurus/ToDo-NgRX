import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import {
  U_ADD_TODO, S_ADD_TODO, U_REMOVE_TODO, S_REMOVE_TODO, S_ADD_TODO_ERROR, U_DISPATCH_ADD_TODO,
  S_REMOVE_TODO_ERROR, U_DISPATCH_REMOVE_TODO
} from '../actions/todo.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {S_SWITCH_ADD, S_SWITCH_REMOVE, U_SWITCH_ADD, U_SWITCH_REMOVE} from '../actions/permission.actions';
import {PermissionService} from '../services/permission.service';

@Injectable()
export class TodosEffects {
  constructor( private actions$: Actions, private permissionService: PermissionService) {}

  @Effect() addTodo$ = this.actions$
    .ofType(U_ADD_TODO)
    .switchMap((action) => {
      return Observable.of({
          type: U_DISPATCH_ADD_TODO,
          payload: {
            perms: this.permissionService.recievedPermissions(),
            data: {
              title: action.payload[0]
            }
          }
        });
    });

   @Effect() dispatchAdd$ = this.actions$
      .ofType(U_DISPATCH_ADD_TODO)
     .switchMap((action) => {
       const actionType = (action.payload.perms.canAdd) ? S_ADD_TODO : S_ADD_TODO_ERROR;
       return Observable.of({
         type: actionType,
         payload: action.payload.data
       });
     });

  @Effect() removeTodo$ = this.actions$
    .ofType(U_REMOVE_TODO)
    .switchMap((action) => {
      return Observable.of({
          type: U_DISPATCH_REMOVE_TODO,
          payload: {
            perms: this.permissionService.recievedPermissions(),
            data: {
              id: action.payload[0]
            }
          }
        });
    });

  @Effect() dispatchRemove$ = this.actions$
    .ofType(U_DISPATCH_REMOVE_TODO)
    .switchMap((action) => {
      const actionType = (action.payload.perms.canRemove) ? S_REMOVE_TODO : S_REMOVE_TODO_ERROR;
      return Observable.of({
        type: actionType,
        payload: action.payload.data
      });
    });

  @Effect() switchAdd$ = this.actions$
    .ofType(U_SWITCH_ADD)
    .switchMap(() => {
      return Observable.of({
        type: S_SWITCH_ADD
      });
    });

  @Effect() switchRemove$ = this.actions$
    .ofType(U_SWITCH_REMOVE)
    .switchMap(() => {
      return Observable.of({
        type: S_SWITCH_REMOVE
      });
    });
}
