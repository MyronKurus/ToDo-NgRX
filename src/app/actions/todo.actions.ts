export const U_ADD_TODO = 'U_ADD_TODO';
export const S_ADD_TODO = 'S_ADD_TODO';

export const U_REMOVE_TODO = 'U_REMOVE_TODO';
export const S_REMOVE_TODO = 'S_REMOVE_TODO';

export function addTodo(todo) {
  return {
    type: U_ADD_TODO,
    payload: { ...todo }
  };
}

export function removeTodo(id) {
  return {
    type: U_REMOVE_TODO,
    payload: { id }
  };
}
