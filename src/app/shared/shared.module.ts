import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { EditableNameComponent } from './components/editable-name/editable-name.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddItemComponent } from './components/add-item/add-item.component'

@NgModule({
  declarations: [NavigationComponent, HeaderComponent, EditableNameComponent, AddItemComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [NavigationComponent, HeaderComponent, EditableNameComponent, AddItemComponent],
})
export class SharedModule {}
