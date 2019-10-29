import { Component, OnInit } from '@angular/core';
import { StoreService } from '../state/store.service';

@Component({
  selector: 'todo-actionbar',
  templateUrl: './todo-actionbar.component.html',
  styleUrls: ['./todo-actionbar.component.css']
})
export class TodoActionbarComponent implements OnInit {

  activeCount$ = this.store.select(s => s.todos.reduce(
    (count, t) => t.completed ? count : count + 1, 0)
  );

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

}
