import { HttpResponse } from './http-response'

export type HttpPostParams = {
  url: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: object
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>
}
