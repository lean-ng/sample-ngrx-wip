import { Component, OnInit } from '@angular/core';
import { StoreService } from '../state/store.service';
import { map } from 'rxjs/operators';
import { Todo } from '../state/todo';

@Component({
  selector: 'todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css']
})
export class TodoShellComponent implements OnInit {

  // todos$ = this.store.state$.pipe(map(s => s.todos));
  // hasTodos$ = this.store.state$.pipe(map(s => s.todos.length > 0));
  todos$ = this.store.select(s => s.todos);
  hasTodos$ = this.store.select(s => s.todos.length > 0);

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  trackById(t: Todo) {
    return t.id;
  }

  createTodo(title: string) {
    this.store.dispatch({ name: 'createTodo', title });
  }
}
