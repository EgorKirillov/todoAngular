import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { catchError, map, Observable, of } from 'rxjs'
import { AuthService } from '../services/auth.service'
import { ResultCode } from '../models/core.models'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const urlNav = this.router.createUrlTree(['/login'], { queryParams: { isAuth: false } })
    return this.authService.authMe().pipe(
      map(res => {
        if (res.resultCode === ResultCode.success) {
          return true
        } else {
          return urlNav
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err.message)
        return of(urlNav)
      })
    )
  }
}
