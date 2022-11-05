import { Component, Input, OnInit } from '@angular/core'
import { TodoList } from '../../models/todos.models'
import { TodosService } from '../../services/todos.service'

@Component({
  selector: 'tdl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  @Input() todo!: TodoList
  newTitle = ''

  getNewTitle(newTitle: string) {
    this.newTitle = newTitle
    this.updateTodosTitle()
  }

  deleteTodo() {
    this.todosService.deleteTodos(this.todo.id)
  }

  updateTodosTitle() {
    console.log('update title')
    this.todosService.updateTodosTitle(this.todo.id, this.newTitle)
  }

  ngOnInit(): void {
    console.log('td')
  }
}
