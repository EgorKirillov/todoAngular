import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './components/profile/profile.component'
import { AuthGuard } from '../core/guards/auth.guard'

const routes: Routes = [{ path: ':userId', component: ProfileComponent, canActivate: [AuthGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
