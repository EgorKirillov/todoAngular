import { Component, OnInit } from '@angular/core'
import { TodoList, TodosService } from '../../services/todos.service'

@Component({
  selector: 'tdl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos: TodoList[] = []

  createTodosHandler() {
    console.log('create TODO with title')
    const title = `NG${Math.floor(Math.random() * 100)}`
    this.todosService.createTodos(title).subscribe(res => {
      this.todos.push(res.data.item)
    })
  }

  deleteTodosHandler() {
    console.log('delete TODO by ID')
    const deletedID = '881aa5f5-97eb-4632-9c76-c761a33c519c'
    this.todosService.deleteTodos(deletedID).subscribe(() => {
      this.todos = this.todos.filter(td => td.id !== deletedID)
    })
  }

  ngOnInit(): void {
    console.log('start todos')
    this.todosService.getTodos().subscribe(res => {
      this.todos = res
    })
  }
}
