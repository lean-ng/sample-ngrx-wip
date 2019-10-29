import { Todo } from './todo';

export enum VisibilityFilter {
  All,
  Active,
  Completed
}

export interface TodoState {
  todos: Todo[];
  visibility: VisibilityFilter;
  error: string;
}
