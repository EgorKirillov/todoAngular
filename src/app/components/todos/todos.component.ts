import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface TodoList {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'tdl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private http: HttpClient) {}

  todos: TodoList[] = []

  ngOnInit(): void {
    console.log('start')
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<TodoList[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        withCredentials: true,
        headers: {
          'API-KEY': '4f6e1a9b-a442-4dac-9b05-ef297eadf4f8',
        },
      })
      .subscribe(res => {
        this.todos = res
      })
  }
}
