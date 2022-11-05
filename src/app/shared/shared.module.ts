import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { EditableNameComponent } from './components/editable-name/editable-name.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [NavigationComponent, HeaderComponent, EditableNameComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavigationComponent, HeaderComponent, EditableNameComponent],
})
export class SharedModule {}
