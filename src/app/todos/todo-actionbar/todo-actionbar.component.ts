import { Component, OnInit } from '@angular/core';
import { StoreService } from '../state/store.service';
import { Observable } from 'rxjs';
import { selectActiveCount, selectHasTodos } from '../ngrx/selectors';
import { Store } from '@ngrx/store';
import { TodoState } from '../state/app-state';
import { map } from 'rxjs/operators';
import { State } from '../ngrx/state';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './todo-actionbar.component.html',
  styleUrls: ['./todo-actionbar.component.css']
})
export class TodoActionbarComponent implements OnInit {

  activeCount$: Observable<number>;

  // Injection: store: Store<State> wobei State der RootState ist
  // hasTodos$ = this.store.select<TodoState>('todos').pipe(
  //   map(s => s.todos.length > 0)
  // );

  // Injection: store: Store<State> wobei State abgeleite RootState ist
  // hasTodos$ = this.store.select(s => s.todos.todos.length > 0);

  // Injection: egal
  hasTodos$ = this.store.select(selectHasTodos);

  constructor(private store: Store<State>) {

    this.activeCount$ = store.select(s => selectActiveCount(s));

  }

  ngOnInit() {
  }

}
