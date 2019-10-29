import { VisibilityFilter, AppState } from './app-state';
import { Todo } from './todo';

export interface CreateTodo {
  name: 'createTodo';
  title: string;
}

export function createTodo(title: string): Action {
  return { name: 'createTodo', title };
}

export interface TodoCreated {
  name: 'todoCreated';
  todo: Todo;
}

export interface UpdateTodoTitle {
  name: 'updateTodo';
  id: number;
  newTitle: string;
}

export interface ToggleTodo {
  name: 'toggleTodo';
  id: number;
}

export interface RemoveTodo {
  name: 'removeTodo';
  id: number;
}

export interface ChangeVisibility {
  name: 'changeVisibility';
  newVisibility: VisibilityFilter;
}

export type Action =
  CreateTodo |
  UpdateTodoTitle |
  ToggleTodo |
  RemoveTodo |
  ChangeVisibility;

export function reducer( state: AppState, action: Action ): AppState {

  const nextId = state.todos.length === 0 ? 1 : state.todos[state.todos.length - 1].id + 1;

  switch(action.name) {

    case 'createTodo':

      return {
        ...state,
        todos: [ ...state.todos, { id: nextId, title: action.title, completed: false } ]
      };

    case 'changeVisibility':
      return {
        ...state,
        visibility: action.newVisibility
      };

    case 'updateTodo':
      const todoToUpdate = state.todos.find(t => t.id === action.id);
      return {
        ...state,
        todos: state.todos.map( t => t.id !== action.id ? t : {
          ...todoToUpdate, title: action.newTitle
        })
      };

    case 'toggleTodo':
        const todoToToggle = state.todos.find(t => t.id === action.id);
        return {
          ...state,
          todos: state.todos.map( t => t.id !== action.id ? t : {
            ...todoToToggle, completed: !todoToToggle.completed
          })
        };

    case 'removeTodo':
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id)
      };

    default:
      return state;
  }

}
