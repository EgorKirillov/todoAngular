import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodosComponent } from './components/todos/todos.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
