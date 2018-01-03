///<reference path="effects/permission.effects.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { todos } from './reducers/todo.reducer';
import { TodosEffects } from './effects/todos.effects';
import { TodosService } from './services/todos.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { CheckerComponent } from './components/checker/checker.component';
import {PermissionService} from './services/permission.service';
import {permissions} from './reducers/permission.reducer';
import {PermissionEffects} from './effects/permission.effects';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    CheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore({todos, permissions}),
    EffectsModule.run(TodosEffects)
  ],
  providers: [ TodosService, PermissionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
