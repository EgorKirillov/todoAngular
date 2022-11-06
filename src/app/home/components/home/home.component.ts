import { Component, OnInit } from '@angular/core'
import { TodoList } from '../../../todos/models/todos.models'

@Component({
  selector: 'tdl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  getNewTitle(e: string) {}

  todos: TodoList[] = [
    { title: 'title', id: '001', addedDate: 'date added1', order: 0 },
    { title: 'title01', id: '002', addedDate: 'date added2', order: 0 },
    { title: 'title02', id: '003', addedDate: 'date added3', order: 0 },
    { title: 'title03', id: '004', addedDate: 'date added4', order: 0 },
    { title: 'title04', id: '005', addedDate: 'date added5', order: 0 },
    { title: 'title05', id: '006', addedDate: 'date added6', order: 0 },
    { title: 'title06', id: '007', addedDate: 'date added7', order: 0 },
    { title: 'title07', id: '008', addedDate: 'date added8', order: 0 },
    { title: 'title08', id: '009', addedDate: 'date added9', order: 0 },
  ]

  ngOnInit(): void {}
}
