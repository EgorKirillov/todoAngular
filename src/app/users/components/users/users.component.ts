import { Component, OnInit } from '@angular/core'
import { UsersService } from '../../seervices/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../../models/users.model'

@Component({
  selector: 'tdl-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {}

  nextUsersPageHandler() {
    const page = this.route.snapshot.queryParamMap.get('page')
    const nextPage: number = page ? Number(page) + 1 : 2

    //1 variant
    // this.router.navigateByUrl(`/users?page=${nextPage}`)
    //2variant
    this.router.navigate(['/users'], { queryParams: { page: nextPage } })
  }

  getUsers(nextPage: number) {
    this.users$ = this.usersService.getUsers(nextPage)
  }

  ngOnInit(): void {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const currentPage = page ? page : 1
    this.getUsers(currentPage)

    //if changed query params, then getUsers
    this.route.queryParams.subscribe(param => {
      this.getUsers(param['page'] ? param['page'] : 1)
    })
  }
}
