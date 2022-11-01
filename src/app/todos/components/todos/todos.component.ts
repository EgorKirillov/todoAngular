import { Component, OnInit } from '@angular/core'
import { TodosService } from '../../services/todos.service'
import { Observable } from 'rxjs'
import { TodoList } from 'src/app/todos/models/todos.models'

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
    const deletedID = '18977380-8d07-4fff-8d24-de6ca3e91022'
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
