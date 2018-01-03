import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../models/app-state.model';
import {Observable} from 'rxjs/Observable';
import {Permissions} from '../models/permission.model';
import {switchAdd, switchRemove} from '../actions/permission.actions';

@Injectable()
export class PermissionService {

  constructor(private store: Store<IAppState>) {
  }

  getPermissions(): Observable<Permissions> {
    return this.store.select('permissions');
  }

  switchAddPermission() {
    this.store.dispatch(switchAdd());
  }

  switchRemovePermission() {
    this.store.dispatch(switchRemove());
  }

}
