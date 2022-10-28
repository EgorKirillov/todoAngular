import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface TodoList {
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

@Component({
  selector: 'tdl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private http: HttpClient) {}

  todos: TodoList[] = []

  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': '4f6e1a9b-a442-4dac-9b05-ef297eadf4f8',
    },
  }

  httpBaseUrl = 'https://social-network.samuraijs.com/api/1.1'

  createTodosHandler() {
    console.log('create TODO')
    this.createTodos()
  }

  deleteTodosHandler() {
    console.log('delete TODO')
    this.deleteTodos()
  }

  ngOnInit(): void {
    console.log('start')
    this.getTodos()
  }

  getTodos() {
    this.http.get<TodoList[]>(`${this.httpBaseUrl}/todo-lists`, this.httpOptions).subscribe(res => {
      this.todos = res
    })
  }

  createTodos() {
    const title = `NG${Math.floor(Math.random() * 100)}`
    this.http
      .post<TodoResponce<{ item: TodoList }>>(`${this.httpBaseUrl}/todo-lists`, { title }, this.httpOptions)
      .subscribe(res => {
        this.todos.push(res.data.item)
      })
  }

  deleteTodos() {
    const deletedID = '3727bd66-174a-4b76-bd0d-c57d066cf400'
    this.http.delete<TodoResponce>(`${this.httpBaseUrl}/todo-lists/${deletedID}`, this.httpOptions).subscribe(res => {
      this.todos = this.todos.filter(td => td.id !== deletedID)
    })
  }
}
