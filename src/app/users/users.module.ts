import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './components/users/users.component'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatButtonModule],
})
export class UsersModule {}
