import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TasksComponent } from './components/tasks/tasks.component'
import { TasksService } from './services/tasks.service'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, SharedModule],
  providers: [TasksService],
  exports: [TasksComponent],
  // exports: [TasksComponent],
})
export class TasksModule {}
