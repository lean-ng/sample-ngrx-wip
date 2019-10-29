import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './todo-shell/todo-shell.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoActionbarComponent } from './todo-actionbar/todo-actionbar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/state';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './ngrx/todos-effects';



@NgModule({
  declarations: [TodoShellComponent, TodoInputComponent, TodoItemComponent, TodoActionbarComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', reducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [ TodoShellComponent ]
})
export class TodosModule { }
