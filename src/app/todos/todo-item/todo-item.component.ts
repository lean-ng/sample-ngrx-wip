import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../state/todo';
import { Store } from '@ngrx/store';
import { State, toggleTodo, removeTodo } from '../ngrx/state';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  toggle() {
    this.store.dispatch(toggleTodo({ id: this.todo.id, completed: !this.todo.completed }));
  }

  remove() {
    this.store.dispatch(removeTodo({ id: this.todo.id }));
  }
}
