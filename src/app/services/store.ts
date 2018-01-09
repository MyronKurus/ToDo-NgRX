import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {IAppState} from '../models/app-state.model';

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

  protected static dispatch(action: Action) {
    if (!storeInstance) { return false; }

    storeInstance.dispatch();
  }
}

export function UserAction(type: string) {
  console.log(storeInstance);
  // ActionService.getStore();

  return function (target: any, key: string, descriptor: PropertyDescriptor) {

  };
}
