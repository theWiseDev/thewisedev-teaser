import {
  HttpPostClient,
  HttpPostParams,
} from '../usecases/subscribe/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: object

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
