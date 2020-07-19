import { HttpPostClient } from './protocols/http/http-post-client'

/* eslint-disable prettier/prettier */
export class RemoteSubscribe {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) { }

  async subscribe(): Promise<void> {
    await this.httpPostClient.post({ url: this.url })
  }
}
