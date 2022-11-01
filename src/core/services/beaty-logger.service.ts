import { Injectable } from '@angular/core'
import { SeverityType } from '../models/core.models'

@Injectable({
  providedIn: 'root',
})
export class BeatyLoggerService {
  constructor() {}

  log(message: string, type: SeverityType) {
    console.log(`%c${message}`, this.getSeverity(type))
  }

  getSeverity(type: SeverityType) {
    switch (type) {
      case 'error':
        return 'background: red; color:white'
      case 'info':
        return 'background: blue; color:white'
      case 'success':
        return 'background: green; color:white'
      default:
        return ''
    }
  }
}
