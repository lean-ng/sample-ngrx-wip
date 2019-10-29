import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../state/todo';
import { StoreService } from '../state/store.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  toggle() {
    this.store.dispatch({ name: 'toggleTodo', id: this.todo.id });
  }

  remove() {
    this.store.dispatch({ name: 'removeTodo', id: this.todo.id });
  }
}
