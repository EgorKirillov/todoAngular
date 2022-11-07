import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodosRoutingModule } from './todos-routing.module'
import { TodosComponent } from './components/todos/todos.component'
import { TodoComponent } from './components/todo/todo.component'
import { SharedModule } from '../shared/shared.module'
import { TasksModule } from '../tasks/tasks.module'

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [CommonModule, TodosRoutingModule, SharedModule, TasksModule],
})
export class TodosModule {}
