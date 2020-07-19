import { HttpPostClient, HttpStatusCode } from '../../protocols/http'
import { SubscribeParams, Subscribe } from '../../../domain/usecases'
import {
  InvalidCredentialsError,
  UnexpectedError,
} from '../../../domain/errors'
import { SubscriberModel } from '../../../domain/models'

/* eslint-disable prettier/prettier */
export class RemoteSubscribe implements Subscribe {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<SubscribeParams, SubscriberModel>,
  ) { }

  async subscribe(params: SubscribeParams): Promise<SubscriberModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
