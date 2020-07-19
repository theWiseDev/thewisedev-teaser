import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
} from '../protocols/http'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string

  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: T

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
