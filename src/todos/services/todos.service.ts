import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../environments/environment'
import { BeatyLoggerService } from '../../core/services/beaty-logger.service'

export interface TodoList {
  addedDate: string
  id: string
  order: number
  title: string
}

interface FieldError {
  field: string
  error: string
}

interface TodoResponce<T = {}> {
  resultCode: number
  messages: Array<string>
  fieldsErrors?: Array<FieldError>
  data: T
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient, private beatyLoggerService: BeatyLoggerService) {}

  todos$: BehaviorSubject<TodoList[]> = new BehaviorSubject<TodoList[]>([])

  private errorHandler(err: HttpErrorResponse) {
    this.beatyLoggerService.log(err.message, 'error')
    // console.log(err.message)
    return EMPTY
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
}
