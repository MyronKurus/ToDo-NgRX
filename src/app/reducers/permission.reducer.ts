import {S_SWITCH_ADD, S_SWITCH_REMOVE} from '../actions/permission.actions';
import {Permissions} from '../models/permission.model';

const defaultPermissions: Permissions = {
  canAdd: false,
  canRemove: false
};

export function permissions(state: Permissions = defaultPermissions, {type}) {
  switch (type) {
    case S_SWITCH_ADD:
      return {canAdd: !state.canAdd, canRemove: state.canRemove};
    case S_SWITCH_REMOVE:
      return {canAdd: state.canAdd, canRemove: !state.canRemove};
    default:
      return state;
  }
}
