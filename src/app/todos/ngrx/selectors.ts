import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { TodoState } from '../state/app-state';

export const selectTodosFeature = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(selectTodosFeature,
  s => s.todos );

export const selectHasTodos = createSelector(selectTodosFeature,
  s => s.todos.length > 0 );

export const selectActiveCount = createSelector(selectTodosFeature,
  (s: TodoState) => s.todos.reduce( (count, t) => t.completed ? count : count + 1, 0 ) );

