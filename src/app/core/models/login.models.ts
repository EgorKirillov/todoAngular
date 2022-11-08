import { ResultCode } from './core.models'

export interface Login {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string //  if   there  is  resultCode  is  10  in  response  data  .
}

export interface LoginResponce {
  resultCode: ResultCode
  messages: string[]
  data: {
    id?: number
  }
}
