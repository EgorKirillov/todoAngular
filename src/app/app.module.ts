import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button'
import { CredentialsInterceptor } from '../core/interceptors/credentials.interceptor'
import { SharedModule } from '../shared/shared.module'
import { AuthModule } from '../auth/auth.module'
import { ProfileModule } from '../profile/profile.module'
import { PageNotFoundModule } from '../page-not-found/page-not-found.module'
import { HomeModule } from '../home/home.module'
import { TodosModule } from '../todos/todos.module'
import { UsersModule } from '../users/users.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    SharedModule,
    AuthModule,
    ProfileModule,
    HomeModule,
    TodosModule,
    UsersModule,
    PageNotFoundModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
