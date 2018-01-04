import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { U_SWITCH_ADD, S_SWITCH_ADD, U_SWITCH_REMOVE, S_SWITCH_REMOVE } from '../actions/permission.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PermissionEffects {
  constructor(private actions$: Actions) {}

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
