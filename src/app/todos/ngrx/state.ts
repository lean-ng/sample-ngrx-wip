import { createAction, props, createReducer, on, Action } from "@ngrx/store";
import { VisibilityFilter, TodoState } from '../state/app-state';
import { Todo } from '../state/todo';
import { State as RootState } from '../../reducers';

export const loadTodos = createAction('[Todos] load');
export const todosLoaded = createAction('[Todos] loaded', props<{ todos: Todo[] }>());

export const createTodo =
  createAction('[Todos] create', props<{ title: string }>());

export const updateTodo =
  createAction('[Todos] update', props<{ id: number,  title: string }>());

export const toggleTodo =
  createAction('[Todos] toggle', props<{ id: number, completed: boolean }>());

export const removeTodo =
  createAction('[Todos] remove', props<{ id: number }>());

export const changeVisibility =
  createAction('[Todos] visibility', props<{ visibility: VisibilityFilter }>());

export const todoCreated =
  createAction('[Todos] created', props<{ todo: Todo }>());
export const todoDeleted =
  createAction('[Todos] deleted', props<{ id: number }>());
export const todoUpdated =
  createAction('[Todos] updated', props<{ todo: Todo }>());

export interface State extends RootState {
  todos: TodoState;
}

export const errorOccured =
  createAction('[Todos] Backend Error');

export const initialState: TodoState = {
  todos: [
  ],
  visibility: VisibilityFilter.All,
  error: null
};

const todosReducer = createReducer(
  initialState,
  on(todosLoaded, (state, { todos}) => ({ ...state, todos })),
  on(todoCreated, (state, { todo }) => ({ ...state, todos: [ ...state.todos, todo ]}) ),
  on(todoDeleted, (state, { id }) => ({ ...state, todos: state.todos.filter(t => t.id !== id)})),
  on(todoUpdated, (state, { todo }) => ({ ...state, todos: state.todos.map(t => t.id !== todo.id ? t : todo)})),
  on(changeVisibility, (state, { visibility}) => ({ ...state, visibility }))
)

export function reducer(state: TodoState | undefined, action: Action) {
  return todosReducer(state, action);
}
