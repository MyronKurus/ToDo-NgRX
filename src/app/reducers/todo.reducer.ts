import { S_ADD_TODO, S_ADD_TODO_ERROR, S_REMOVE_TODO, S_REMOVE_TODO_ERROR } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

function filterByID(statearr, obj) {
  const arr = [...statearr];
  arr.forEach((item, index) => {
    if (item.id === obj.id) {
      arr.splice(index, 1);
    }
  });
  return arr;
}

function createTodo(obj) {
  const num = (Math.random() * 100).toFixed(0);
  return {id: num, ...obj, completed:  false};
}

const defaultList: Todo[] = [
  {id: 1, title: 'Learn ngrx/store', completed: false},
  {id: 2, title: 'Learn ngrx/effects', completed: false}
];

export function todos(state = defaultList, { type, payload }) {
  switch ( type ) {
    case S_ADD_TODO:
      const todoItem: Todo = createTodo(payload);
      state.push(todoItem);
      return state;
    case S_REMOVE_TODO:
      return filterByID(state, payload);
    case S_ADD_TODO_ERROR:
      console.log('You don\'t have permission for this action!');
      return state;
    case S_REMOVE_TODO_ERROR:
      console.log('You don\'t have permission for this action!');
      return state;
    default:
      return state;
  }
}
