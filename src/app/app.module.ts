import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module'
import { PageNotFoundModule } from './page-not-found/page-not-found.module'
import { HomeModule } from './home/home.module'
import { CoreModule } from './core/core.module'
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    PageNotFoundModule,
    CoreModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
