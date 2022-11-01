import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { map, Observable } from 'rxjs'

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

export interface UsersResponce {
  items: User[]
  totalCount: number
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<User[]> {
    return this.http.get<UsersResponce>(`${environment.baseNetworkURL}/users?page=${page}`).pipe(map(el => el.items))
  }
}
