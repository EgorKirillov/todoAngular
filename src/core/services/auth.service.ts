import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

interface AuthMeResponce {
  resultCode: ResultCode
  messages: string[]
  fieldErrors: string[]
  data: {
    id: number
    email: string
    login: string
  }
}

enum ResultCode {
  success,
  error,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = false

  authMe() {
    return this.http.get<AuthMeResponce>(`${environment.baseNetworkURL}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCode.success) {
        this.isAuth = true
      } else {
        this.isAuth = false
      }
    })
  }
}
