import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState, VisibilityFilter } from './app-state';
import { Action, reducer } from './actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private stateSource = new BehaviorSubject<AppState>(
    { todos: [], visibility: VisibilityFilter.All }
  );
  state$ = this.stateSource.asObservable();

  constructor() { }

  dispatch(action: Action) {
    this.stateSource.next(reducer(this.stateSource.value, action));
  }

  select<T>( selector: (state: AppState) => T ): Observable<T> {
    return this.state$.pipe(map(selector));
  }

  createTodo(title: string) {

  }
}
