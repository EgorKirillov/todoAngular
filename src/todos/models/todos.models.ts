export interface TodoList {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface FieldError {
  field: string
  error: string
}

export interface TodoResponce<T = {}> {
  resultCode: number
  messages: Array<string>
  fieldsErrors?: Array<FieldError>
  data: T
}
