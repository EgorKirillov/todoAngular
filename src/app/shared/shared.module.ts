import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [NavigationComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, HeaderComponent],
})
export class SharedModule {}
