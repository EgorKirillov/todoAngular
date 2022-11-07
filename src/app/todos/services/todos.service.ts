import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../../environments/environment'
import { BeatyLoggerService } from '../../core/services/beaty-logger.service'
import { TodoList, TodoResponce } from '../models/todos.models'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient, private beatyLoggerService: BeatyLoggerService) {}

  todos$: BehaviorSubject<TodoList[]> = new BehaviorSubject<TodoList[]>([])

  private errorHandler(err: HttpErrorResponse) {
    this.beatyLoggerService.log(err.message, 'error')
    return EMPTY
  }

  getTodosLength() {
    return this.todos$.getValue().length
  }

  getTodos() {
    this.http
      .get<TodoList[]>(`${environment.baseURL}/todo-lists`)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodos(title: string) {
    this.http
      .post<TodoResponce<{ item: TodoList }>>(`${environment.baseURL}/todo-lists`, { title })
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todos$.getValue()
          return [...stateTodos, newTodo]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodos(deletedID: string) {
    return this.http
      .delete<TodoResponce>(`${environment.baseURL}/todo-lists/${deletedID}`)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(td => td.id !== deletedID)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  updateTodosTitle(todoId: string, title: string) {
    return this.http
      .put<TodoResponce>(`${environment.baseURL}/todo-lists/${todoId}`, { title })
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().map(td => (td.id === todoId ? { ...td, title: title } : td))
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
