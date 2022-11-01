import { Component, OnInit } from '@angular/core'
import { TodoList, TodosService } from '../../services/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'tdl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos$!: Observable<TodoList[]>
  error = ''

  createTodosHandler() {
    console.log('create TODO with title')
    const title = `NG${Math.floor(Math.random() * 100)}`
    this.todosService.createTodos(title)
  }

  deleteTodosHandler() {
    console.log('delete TODO by ID')
    const deletedID = 'ecc31dd7-cd52-4c34-bdb2-f6b0034353b5'
    this.todosService.deleteTodos(deletedID)
  }

  getTodos() {
    this.todosService.getTodos()
  }

  ngOnInit(): void {
    console.log('start todos')
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }
}
