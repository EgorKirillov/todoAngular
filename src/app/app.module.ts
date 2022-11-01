import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodosComponent } from '../todos/components/todos/todos.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HomeComponent } from '../home/components/home/home.component'
import { UsersComponent } from '../users/components/users/users.component'
import { MatButtonModule } from '@angular/material/button'
import { CredentialsInterceptor } from '../core/interceptors/credentials.interceptor'
import { SharedModule } from '../shared/shared.module'
import { AuthModule } from '../auth/auth.module'
import { ProfileModule } from '../profile/profile.module'
import { PageNotFoundModule } from '../page-not-found/page-not-found.module'

@NgModule({
  declarations: [AppComponent, TodosComponent, HomeComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    SharedModule,
    AuthModule,
    ProfileModule,
    PageNotFoundModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
