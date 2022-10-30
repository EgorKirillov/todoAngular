import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../environments/environment'

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
  constructor(private http: HttpClient) {}

  todos$: BehaviorSubject<TodoList[]> = new BehaviorSubject<TodoList[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': environment.apiKey,
    },
  }

  private static errorHandler(err: HttpErrorResponse) {
    console.log(err.message)
    return EMPTY
  }

  getTodos() {
    this.http
      .get<TodoList[]>(`${environment.baseURL}/todo-lists`, this.httpOptions)
      .pipe(catchError(TodosService.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodos(title: string) {
    this.http
      .post<TodoResponce<{ item: TodoList }>>(`${environment.baseURL}/todo-lists`, { title }, this.httpOptions)
      .pipe(
        catchError(TodosService.errorHandler.bind(this)),
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
      .delete<TodoResponce>(`${environment.baseURL}/todo-lists/${deletedID}`, this.httpOptions)
      .pipe(
        catchError(TodosService.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(td => td.id !== deletedID)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
