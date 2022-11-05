import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class LoaderService {
  // isLoading: boolean = false
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  startLoading() {
    this.isLoading$.next(true)
  }

  endLoading() {
    this.isLoading$.next(false)
  }

  constructor() {}
}
