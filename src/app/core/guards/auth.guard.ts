import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { catchError, map, Observable, of } from 'rxjs'
import { AuthService } from '../services/auth.service'
import { ResultCode } from '../models/core.models'
import { HttpErrorResponse } from '@angular/common/http'
import { LoaderService } from '../services/loader.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private loaderService: LoaderService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.loaderService.startLoading()
    const urlNav = this.router.createUrlTree(['/login'], { queryParams: { isAuth: false } })
    return this.authService.authMe().pipe(
      map(res => {
        this.loaderService.endLoading()
        if (res.resultCode === ResultCode.success) {
          return true
        } else {
          return urlNav
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err.message)
        this.loaderService.endLoading()
        return of(urlNav)
      })
    )
  }
}
