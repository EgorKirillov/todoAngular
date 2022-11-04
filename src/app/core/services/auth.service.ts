import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { AuthMeResponce, ResultCode } from '../models/core.models'
import { tap } from 'rxjs'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = false

  authMe() {
    return this.http.get<AuthMeResponce>(`${environment.baseNetworkURL}/auth/me`).pipe(
      tap(res => {
        this.isAuth = res.resultCode === ResultCode.success
      })
    )
  }
}
