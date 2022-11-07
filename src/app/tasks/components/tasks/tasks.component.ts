import { Component, Input, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { Task } from '../../models/tasks.models'
import { TasksService } from '../../services/tasks.service'

@Component({
  selector: 'tdl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private tasksService: TasksService) {
    this.tasks$ = this.tasksService.tasks$
    this.tasksById$ = this.tasksService.tasks$.pipe(map(res => res[this.todoId]))
  }

  tasks$: Observable<{ [key: string]: Task[] }>
  tasksById$: Observable<Task[]>
  renderTask: Task[] = []

  @Input() todoId!: string

  changeTaskTitle(newTitle: string, taskId: string) {
    this.tasksService.updateTaskTitle(this.todoId, taskId, newTitle)
  }

  deleteTask(taskId: string) {
    this.tasksService.deleteTask(this.todoId, taskId)
  }

  createNewTask(taskTitle: string) {
    this.tasksService.createTask(this.todoId, taskTitle)
  }

  ngOnInit(): void {
    this.tasksService.getTasks(this.todoId)
    console.log('task')
  }
}
