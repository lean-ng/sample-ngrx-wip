import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  title = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  createTodo() {
    this.create.emit(this.title);
    this.title = '';
  }
}
