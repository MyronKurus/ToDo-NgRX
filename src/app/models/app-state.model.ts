import { Todo } from './todo.model';
import { Permissions } from './permission.model';

export interface IAppState {
  data: Todo[];
  perm: Permissions;
}
