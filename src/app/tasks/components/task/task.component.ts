import { Component, Input, OnInit } from '@angular/core'
import { Task, TaskStatuses } from '../../models/tasks.models'
import { TasksService } from '../../services/tasks.service'

@Component({
  selector: 'tdl-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  @Input() task!: Task
  taskComplited: boolean = false

  deleteTask() {
    this.tasksService.deleteTask(this.task.todoListId, this.task.id)
  }

  changeTaskTitle(newTitle: string) {
    this.tasksService.updateTaskTitle(this.task.todoListId, this.task.id, newTitle)
  }

  changeTaskStatus() {
    event?.preventDefault()
    const newStatus = this.task.status === TaskStatuses.New ? TaskStatuses.Complited : TaskStatuses.New
    console.log('change status')
    this.tasksService.updateTaskStatus(this.task.todoListId, this.task.id, newStatus)
  }

  ngOnInit(): void {
    this.taskComplited = this.task.status === TaskStatuses.Complited
  }
}
