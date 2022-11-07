import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'tdl-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  constructor() {}

  @Input() placeholder?: string = ''

  item = new FormControl('')

  @Output() addItem = new EventEmitter<string>()

  addItemHandler() {
    const value = this.item.value?.trim()
    this.addItem.emit(value)
    this.item.setValue('')
  }

  ngOnInit(): void {}
}
