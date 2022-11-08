import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { ResultCode } from '../models/core.models'
import { catchError, EMPTY, tap } from 'rxjs'
import { AuthMeResponce, Login, LoginResponce } from '../models/login.models'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = false
  needCaptcha: boolean = false
  error: string = ''

  authMe() {
    return this.http.get<AuthMeResponce>(`${environment.baseURL}/auth/me`).pipe(
      tap(res => {
        this.isAuth = res.resultCode === ResultCode.success
      })
    )
  }

  login(loginData: Login) {
    return this.http.post<LoginResponce>(`${environment.baseURL}/auth/login`, loginData).pipe(
      catchError(err => {
        this.error = err.message
        return EMPTY
      }),
      tap(res => {
        this.needCaptcha = res.resultCode === ResultCode.captcha
        if (res.resultCode === ResultCode.error) {
          this.error = res.messages[0]
        }
      })
    )
  }

  logout() {
    return this.http.delete<LoginResponce>(`${environment.baseURL}/auth/login`).pipe(
      catchError(err => {
        this.error = err.message
        return EMPTY
      }),
      tap(res => {
        if (res.resultCode !== ResultCode.success) {
          this.error = res.messages[0]
        }
      })
    )
  }
}
