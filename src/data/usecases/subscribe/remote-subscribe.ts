import { HttpPostClient } from './protocols/http/http-post-client'
import { SubscribeParams } from '../../../domain/usecases/subscribe'

/* eslint-disable prettier/prettier */
export class RemoteSubscribe {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) { }

  async subscribe(params: SubscribeParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}
