import { Component, OnInit } from '@angular/core'
import { AuthService } from './core/services/auth.service'
import { LoaderService } from './core/services/loader.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'tdl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngTodo'

  constructor(private authService: AuthService, private loaderService: LoaderService) {
    this.isLoading$ = this.loaderService.isLoading$
  }

  isLoading$: Observable<boolean>

  ngOnInit(): void {
    // this.authService.authMe()
  }
}
