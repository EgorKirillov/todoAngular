import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../core/services/auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {
    this.isAuth$ = this.authService.isAuth$
  }

  isAuth$: Observable<boolean>

  logoutHandler() {
    console.log('logout')
    this.authService.logout()
  }

  ngOnInit(): void {}
}
