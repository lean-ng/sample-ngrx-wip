import { Component, OnInit } from '@angular/core';
import { StoreService } from '../state/store.service';
import { map } from 'rxjs/operators';
import { Todo } from '../state/todo';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromFeature from '../ngrx/state';
import { selectHasTodos } from '../ngrx/selectors';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css']
})
export class TodoShellComponent implements OnInit {

  todos$: Observable<Todo[]>;
  hasTodos$: Observable<boolean>;

  constructor(private store: Store<fromFeature.State>) {
      this.todos$ = store.select(s => s.todos.todos );
      this.hasTodos$ = store.select(selectHasTodos);

      // this.todos$ =
      //    store.select<TodoState>('todos').pipe(map(s => s.todos));
      //this.hasTodos$ =
      //   store.select<TodoState>('todos').pipe(map(s => s.todos.length > 0));
  }

  ngOnInit() {
    this.store.dispatch(fromFeature.loadTodos());
  }

  trackById(t: Todo) {
    return t.id;
  }

  createTodo(title: string) {
    this.store.dispatch(fromFeature.createTodo({ title }));
  }
}
