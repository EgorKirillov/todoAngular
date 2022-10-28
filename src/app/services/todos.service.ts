import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
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

  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': environment.apiKey,
    },
  }

  getTodos(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(`${environment.baseURL}/todo-lists`, this.httpOptions)
  }

  createTodos(title: string) {
    return this.http.post<TodoResponce<{ item: TodoList }>>(
      `${environment.baseURL}/todo-lists`,
      { title },
      this.httpOptions
    )
  }

  deleteTodos(deletedID: string) {
    return this.http.delete<TodoResponce>(`${environment.baseURL}/todo-lists/${deletedID}`, this.httpOptions)
  }
}
