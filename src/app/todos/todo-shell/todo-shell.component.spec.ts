import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoShellComponent } from './todo-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TodoShellComponent', () => {
  let component: TodoShellComponent;
  let fixture: ComponentFixture<TodoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoShellComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initially zero todos', () => {
    const todos = fixture.nativeElement.querySelectorAll('ul.todo-list li');
    expect(todos.length).toBe(0);
  });

  it('should hide the main section, when there are no todos', () => {
    const main = fixture.debugElement.query(By.css('section.main'));
    expect(main.classes.hidden).toBeTruthy();
  });
});
