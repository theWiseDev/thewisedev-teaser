import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: object

  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  }

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
