import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
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
  static getStore () {
    return storeInstance;
  }
}
