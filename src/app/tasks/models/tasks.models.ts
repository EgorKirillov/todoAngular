export interface Task {
  id: string
  title: string
  description: string
  todoListId: string
  order: number
  status: number
  priority: number
  startDate: string
  deadline: string
  addedDate: string
  completed: boolean // может не быть
}

export interface GetTasksResponce {
  items: Task[]
  totalCount: number
  error: string
}

export interface TasksResponce<T = { item: Task }> {
  // Post and put and delete
  data: T
  resultCode: number //   (0 if opearation completed successfullt, other numbers - some error occured)
  messages: string[] //  is empty if resultCode is 0, contains error messages if resultCode is different from 0
}
