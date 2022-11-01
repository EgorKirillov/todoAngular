export interface AuthMeResponce {
  resultCode: ResultCode
  messages: string[]
  fieldErrors: string[]
  data: {
    id: number
    email: string
    login: string
  }
}

export enum ResultCode {
  success,
  error,
}

export type SeverityType = 'error' | 'success' | 'info'
