import {
  HttpPostClient,
  HttpPostParams,
} from '../usecases/subscribe/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
