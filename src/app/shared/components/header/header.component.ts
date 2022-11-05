import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../../core/services/auth.service'

@Component({
  selector: 'tdl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuth = this.authService.isAuth
  ngOnInit(): void {}
}
