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
  constructor(private todosService: TodosService) {
    this.todos$ = this.todosService.todos$
  }

  todos$: Observable<TodoList[]>
  error = ''

  createTodosHandler(title: string) {
    if (this.todosService.getTodosLength() < 10) {
      console.log(this.todosService.getTodosLength())
      console.log('create TODO with title: ' + title)
      this.todosService.createTodos(title)
    } else {
      this.error = 'too many Todos'
      setTimeout(() => {
        this.error = ''
      }, 1000)
    }
  }

  getTodos() {
    this.todosService.getTodos()
  }

  ngOnInit(): void {
    console.log('start todos')
    this.getTodos()
  }
}
