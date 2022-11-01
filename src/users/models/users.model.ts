export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

export interface UsersResponce {
  items: User[]
  totalCount: number
}
