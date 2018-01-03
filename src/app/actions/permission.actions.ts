export const U_SWITCH_ADD = 'U_SWITCH_ADD';
export const S_SWITCH_ADD = 'S_SWITCH_ADD';

export const U_SWITCH_REMOVE = 'U_SWITCH_REMOVE';
export const S_SWITCH_REMOVE = 'S_SWITCH_REMOVE';

export function switchAdd() {
  return {
    type: U_SWITCH_ADD
  };
}

export function switchRemove() {
  return {
    type: U_SWITCH_REMOVE
  };
}
