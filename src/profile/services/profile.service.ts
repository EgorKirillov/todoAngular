import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { Profile } from '../models/profile.model'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getprofile(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${environment.baseNetworkURL}/profile/${id}`)
  }
}
