import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'tdl-editable-name',
  templateUrl: './editable-name.component.html',
  styleUrls: ['./editable-name.component.scss'],
})
export class EditableNameComponent implements OnInit {
  constructor() {}

  @Input() name?: string
  @Output() changeName = new EventEmitter<string>()
  editMode: boolean = false
  newName?: string

  activateEditMod() {
    this.editMode = true
  }

  deActivateEditMod() {
    console.log(this.newName)
    this.changeName.emit(this.newName)
    this.editMode = false
  }

  ngOnInit(): void {
    this.newName = this.name
  }
}
