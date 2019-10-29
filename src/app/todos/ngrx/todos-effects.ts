import { Actions, createEffect, ofType } from '@ngrx/effects';
import { todosLoaded, loadTodos, createTodo, todoCreated, updateTodo, todoUpdated, toggleTodo, removeTodo, todoDeleted, errorOccured } from './state';
import { mergeMap, map, switchMap, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '../state/todo';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/todos';

@Injectable()
export class TodosEffects {

  $loadTodos = createEffect( () => this.actions$.pipe(
    ofType(loadTodos),
    mergeMap(
      () => this.http.get<Todo[]>(baseUrl).pipe(
        map(todos => todosLoaded({ todos }))
      )
    )
  )) ;

  $createTodo = createEffect( () => this.actions$.pipe(
    ofType(createTodo),
    mergeMap(
      action => this.http.post<Todo>(baseUrl, { id: 0, title: action.title, completed: false}).pipe(
        map(todo => todoCreated({ todo }))
      )
    )
  ));

  $updateTodo = createEffect( () => this.actions$.pipe(
    ofType(updateTodo),
    mergeMap(
      action => this.http.patch<Todo>(baseUrl + '/' + action.id, { title: action.title }).pipe(
        map(todo => todoUpdated({ todo }))
      )
    )
  ));

  $toggleTodo = createEffect( () => this.actions$.pipe(
    ofType(toggleTodo),
    mergeMap(
      ({ id, completed }) => this.http.patch<Todo>(baseUrl + '/' + id, { completed }).pipe(
        map(todo => todoUpdated({ todo }))
      )
    )
  ));

  $deleteTodo = createEffect( () => this.actions$.pipe(
    ofType(removeTodo),
    mergeMap(
      ({ id }) => this.http.delete<void>(baseUrl + '/' + id).pipe(
        map(todo => todoDeleted({ id }))
      )
    )
  ));

  constructor(private actions$: Actions, private http: HttpClient) {}

}
