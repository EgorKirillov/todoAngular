import { Component, OnInit } from '@angular/core'
import { TodoList, TodosService } from '../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'tdl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos: TodoList[] = []
  error = ''

  createTodosHandler() {
    console.log('create TODO with title')
    const title = `NG${Math.floor(Math.random() * 100)}`
    this.todosService.createTodos(title).subscribe({
      next: res => {
        this.todos.push(res.data.item)
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message
      },
    })
  }

  deleteTodosHandler() {
    console.log('delete TODO by ID')
    const deletedID = '104dfe81-e33a-4701-8736-a41ef2920cbb'
    this.todosService.deleteTodos(deletedID).subscribe({
      next: () => {
        this.todos = this.todos.filter(td => td.id !== deletedID)
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message
      },
    })
  }

  ngOnInit(): void {
    console.log('start todos')
    this.todosService.getTodos().subscribe({
      next: res => {
        this.todos = res
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message
      },
    })
  }
}
