import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { IAppState } from '../models/app-state.model';

let storeInstance;

@Injectable()
export class StoreService {
  constructor(public store: Store<IAppState>) {
    storeInstance = store;
  }
  public select(key: string) {
    return this.store.select(key);
  }
}

export class ActionService {
  static dispatch(action: Action) {
    if (!storeInstance) {
      return false;
    }
    storeInstance.dispatch(action);
  }
}

export function UserAction(type: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const actionType = type;
    descriptor.value = function(...args) {
      ActionService.dispatch({
        type: actionType,
        payload: {...args}
      });
    };
  };
}
