import type { HttpStatusCode } from 'axios'

export {}

declare global {
  type SuccessResponse<T = any> = {
    data?: T
    msg?: string
    code?: HttpStatusCode
  }

  type ErrorResponse = {
    data: string
    msg?: string
    code?: HttpStatusCode
  }

  type PaginationResponse<T = any> = {
    items: Array<T>
    total: number
    has_next: boolean
  }
}
