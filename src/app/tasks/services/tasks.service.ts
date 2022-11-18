import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BeatyLoggerService } from '../../core/services/beaty-logger.service'
import { environment } from '../../../environments/environment'
import { GetTasksResponce, Task, TasksResponce, TaskStatuses, UpdateTaskModel } from '../models/tasks.models'

@Injectable()
export class TasksService {
  constructor(private http: HttpClient, private beatyLoggerService: BeatyLoggerService) {}

  tasks$: BehaviorSubject<{ [key: string]: Task[] }> = new BehaviorSubject<{ [key: string]: Task[] }>({})

  // tasksByTodoId$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])

  private errorHandler(err: HttpErrorResponse) {
    this.beatyLoggerService.log(err.message, 'error')
    return EMPTY
  }

  getTasks(todoId: string) {
    this.http
      .get<GetTasksResponce>(`${environment.baseURL}/todo-lists/${todoId}/tasks`)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        this.tasks$.next({ ...this.tasks$.getValue(), [todoId]: res.items })
      })
  }

  createTask(todoId: string, title: string) {
    this.http
      .post<TasksResponce>(`${environment.baseURL}/todo-lists/${todoId}/tasks`, { title })
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          const newTask = res.data.item
          const stateTasks = this.tasks$.getValue()
          stateTasks[todoId].unshift(newTask)
          return stateTasks
        })
      )
      .subscribe(tasks => {
        this.tasks$.next(tasks)
      })
  }

  deleteTask(todoId: string, taskId: string) {
    return this.http
      .delete<TasksResponce<{}>>(`${environment.baseURL}/todo-lists/${todoId}/tasks/${taskId}`)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          const stateTask = this.tasks$.getValue()
          stateTask[todoId] = stateTask[todoId].filter(task => task.id !== taskId)
          return stateTask
        })
      )
      .subscribe(tasks => {
        this.tasks$.next(tasks)
      })
  }

  updateTaskTitle(todoId: string, taskId: string, title: string) {
    const oldTask = this.tasks$.getValue()[todoId].find(task => task.id === taskId)
    const newTask = { ...this._createUpdateTaskModel(oldTask, 'title', title) }
    return this._updateTask(todoId, taskId, newTask)
  }

  updateTaskStatus(todoId: string, taskId: string, status: TaskStatuses) {
    const oldTask = this.tasks$.getValue()[todoId].find(task => task.id === taskId)
    const newTask = { ...this._createUpdateTaskModel(oldTask, 'status', status) }
    return this._updateTask(todoId, taskId, newTask)
  }

  _updateTask(todoId: string, taskId: string, newTask: UpdateTaskModel) {
    const stateTasks = this.tasks$.getValue()
    return this.http
      .put<TasksResponce>(`${environment.baseURL}/todo-lists/${todoId}/tasks/${taskId}`, newTask)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          return stateTasks[todoId].map(task => (task.id === taskId ? res.data.item : task))
        })
      )
      .subscribe(tasks => {
        this.tasks$.next({ ...stateTasks, [todoId]: [...tasks] })
      })
  }

  _createUpdateTaskModel(task: Task = {} as Task, key: keyof UpdateTaskModel, value: any): UpdateTaskModel {
    const taskModel: UpdateTaskModel = {
      title: task.title,
      status: task.status,
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
      [key]: value,
    }
    return taskModel
  }

  //  костыль как заменить
  createUpdateTaskModel(task: Task = {} as Task): UpdateTaskModel {
    const taskModel: UpdateTaskModel = {
      title: task.title && ' ',
      status: task.status,
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
    }
    return taskModel
  }
}
