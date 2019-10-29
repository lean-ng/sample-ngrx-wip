import { Todo } from './todo';

export enum VisibilityFilter {
  All,
  Active,
  Completed
}

export interface AppState {
  todos: Todo[];
  visibility: VisibilityFilter;
}
