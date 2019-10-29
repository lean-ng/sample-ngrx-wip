import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './todo-shell/todo-shell.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoActionbarComponent } from './todo-actionbar/todo-actionbar.component';



@NgModule({
  declarations: [TodoShellComponent, TodoInputComponent, TodoItemComponent, TodoActionbarComponent],
  imports: [
    CommonModule
  ],
  exports: [ TodoShellComponent ]
})
export class TodosModule { }
