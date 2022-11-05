import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BeatyLoggerService } from './services/beaty-logger.service'
import { AuthService } from './services/auth.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor'
import { AuthGuard } from './guards/auth.guard'
import { LoaderService } from './services/loader.service'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    BeatyLoggerService,
    AuthService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class CoreModule {}
