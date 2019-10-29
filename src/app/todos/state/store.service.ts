import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoState, VisibilityFilter } from './app-state';
import { Action, reducer } from './actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  readonly initialState: TodoState = { todos: [], visibility: VisibilityFilter.All };

  private stateSource = new BehaviorSubject<TodoState>(
    this.initialState
  );
  state$ = this.stateSource.asObservable();

  constructor() {
    Object.freeze(this.initialState);
  }

  dispatch(action: Action) {
    this.stateSource.next(reducer(this.stateSource.value, action));
  }

  select<T>( selector: (state: TodoState) => T ): Observable<T> {
    return this.state$.pipe(map(selector));
  }

  createTodo(title: string) {

  }
}
