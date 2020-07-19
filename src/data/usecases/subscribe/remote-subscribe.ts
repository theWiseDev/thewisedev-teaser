import { HttpPostClient } from '../../protocols/http/http-post-client'
import { SubscribeParams } from '../../../domain/usecases/subscribe'
import { HttpStatusCode } from '../../protocols/http/http-response'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'

/* eslint-disable prettier/prettier */
export class RemoteSubscribe {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) { }

  async subscribe(params: SubscribeParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}
